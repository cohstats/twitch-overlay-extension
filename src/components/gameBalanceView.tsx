import { Table, Tooltip, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { BaseType } from "antd/lib/typography/Base";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Helper } from "../util/Shared/helper";
import { GameData, LadderStats } from "../util/App/GameData";
import { FactionIcon } from "./faction-icon";

interface ComparisonSide {
  available: boolean;
  value: number;
  reason: React.ReactNode;
}

interface ComparisonData {
  label: React.ReactNode;
  suffix?: string;
  left: ComparisonSide;
  right: ComparisonSide;
}

type ComparisonDataEntry = {
  left: React.ReactNode;
  label: React.ReactNode;
  right: React.ReactNode;
  key: number;
};

interface Props {
  gameData: GameData;
}

const GameBalanceView: React.FC<Props> = ({ gameData }) => {
  const createComparisonDataEntry = (
    key: number,
    comparisonData: ComparisonData,
    title?: boolean,
  ): ComparisonDataEntry => {
    const renderValue = (
      textColor: BaseType | undefined,
      comparisonSide: ComparisonSide,
      suffix?: string,
      title?: boolean,
    ) => {
      const content = (
        <>
          {comparisonSide.available ? (
            <>
              {comparisonSide.value.toFixed(1)}
              {suffix ? " " + suffix : null}
            </>
          ) : (
            <>
              <Tooltip title={comparisonSide.reason}>N/A</Tooltip>
            </>
          )}
        </>
      );
      if (title) {
        return (
          <Title level={5} type={textColor}>
            {content}
          </Title>
        );
      }
      return <Text type={textColor}>{content}</Text>;
    };
    let labelJSX = <>{comparisonData.label}</>;
    if (title) {
      labelJSX = <Title level={5}>{comparisonData.label}</Title>;
    }
    let leftTextColor: BaseType | undefined = undefined;
    let rightTextColor: BaseType | undefined = undefined;
    if (comparisonData.left.available && comparisonData.right.available) {
      leftTextColor =
        comparisonData.left.value >= comparisonData.right.value ? "success" : "danger";
      rightTextColor =
        comparisonData.right.value >= comparisonData.left.value ? "success" : "danger";
    }
    return {
      left: renderValue(leftTextColor, comparisonData.left, comparisonData.suffix, title),
      label: labelJSX,
      right: renderValue(rightTextColor, comparisonData.right, comparisonData.suffix, title),
      key: key,
    };
  };

  const notAllRankedReason: React.ReactNode = "Not all players have a ranking";
  const noMapDataReason: React.ReactNode =
    "Map data is only available for regular automatch games";
  const noTotalVictoryChanceReason: React.ReactNode =
    "Victory chance can only be calculated when all values above are set";

  const tableDataSource: ComparisonDataEntry[] = [
    createComparisonDataEntry(0, {
      label: "Average Team Level",
      left: {
        available: gameData.left.averageLevel ? true : false,
        value: gameData.left.averageLevel,
        reason: notAllRankedReason,
      },
      right: {
        available: gameData.right.averageLevel ? true : false,
        value: gameData.right.averageLevel,
        reason: notAllRankedReason,
      },
    }),
    createComparisonDataEntry(1, {
      label: <>Average Team Win Ratio</>,
      suffix: "%",
      left: {
        available: gameData.left.averageWinRatio ? true : false,
        value: gameData.left.averageWinRatio,
        reason: notAllRankedReason,
      },
      right: {
        available: gameData.right.averageWinRatio ? true : false,
        value: gameData.right.averageWinRatio,
        reason: notAllRankedReason,
      },
    }),
    createComparisonDataEntry(2, {
      label: (
        <>
          Win Ratio for this Faction Composition{" "}
          <Helper
            text={
              <>
                Based on{" "}
                <Typography.Link
                  target="_blank"
                  href={
                    "https://coh2stats.com/map-stats?range=month&type=" +
                    gameData.left.solo.length +
                    "v" +
                    gameData.left.solo.length +
                    "&map=" +
                    gameData.map
                  }
                >
                  coh2stats.com{" "}
                </Typography.Link>
                map analysis.
              </>
            }
          />
        </>
      ),
      suffix: "%",
      left: {
        available: gameData.mapWinRatioLeft ? true : false,
        value: gameData.mapWinRatioLeft,
        reason: noMapDataReason,
      },
      right: {
        available: gameData.mapWinRatioLeft ? true : false,
        value: 100 - gameData.mapWinRatioLeft,
        reason: noMapDataReason,
      },
    }),
    createComparisonDataEntry(
      3,
      {
        label: (
          <>
            Victory Chance Probability{" "}
            <Helper
              text={
                <>
                  This is probability of victory based on average team level, average players
                  winrate and factions composition matchup win ratio
                </>
              }
            />
          </>
        ),
        suffix: "%",
        left: {
          available: gameData.winProbabilityLeft ? true : false,
          value: gameData.winProbabilityLeft,
          reason: noTotalVictoryChanceReason,
        },
        right: {
          available: gameData.winProbabilityLeft ? true : false,
          value: 100 - gameData.winProbabilityLeft,
          reason: noTotalVictoryChanceReason,
        },
      },
      true,
    ),
  ];

  const renderFactionIcon = (stats: LadderStats) => (
    <FactionIcon
      key={stats.members[0].relicID}
      large
      faction={stats.members[0].faction}
      style={{ width: "25%", maxWidth: 50 }}
    />
  );

  const tableColumns: ColumnsType<ComparisonDataEntry> = [
    {
      title: <>{gameData.left.solo.map(renderFactionIcon)}</>,
      key: "left",
      align: "right",
      render: (data: ComparisonDataEntry) => <>{data.left}</>,
    },
    {
      title: (
        <>
          <Title style={{ paddingTop: 0, marginBottom: 0 }}>VS</Title>
        </>
      ),
      key: "desc",
      align: "center",
      width: 300,
      render: (data: ComparisonDataEntry) => <>{data.label}</>,
    },
    {
      title: <>{gameData.right.solo.map(renderFactionIcon)}</>,
      key: "right",
      align: "left",
      render: (data: ComparisonDataEntry) => <>{data.right}</>,
    },
  ];

  return (
    <>
      <Table
        columns={tableColumns}
        dataSource={tableDataSource}
        rowKey={(data) => data.key}
        pagination={false}
        size={"small"}
      />
    </>
  );
};

export default GameBalanceView;

/*
    <Text italic>
      <InfoCircleOutlined /> Stats missing? Hover over them to find out the reason.
    </Text>
*/
