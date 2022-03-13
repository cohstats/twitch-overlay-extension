import React from "react";
import { ColumnsType } from "antd/lib/table";
import { Helper } from "../util/Shared/helper";
import { SideData, LadderStats, Member } from "../util/App/GameData";
import { Tooltip, Typography, Table } from "antd";
import { levelToText } from "../util/Shared/helpers";
import { FactionIcon } from "./faction-icon";
import { CountryFlag } from "./country-flag";

interface Props {
  side: SideData;
}

const TeamView: React.FC<Props> = ({ side }) => {
  const TableColumns: ColumnsType<LadderStats> = [
    {
      title: "Alias",
      dataIndex: "members",
      key: "members",
      render: (members: Member[]) => {
        return (
          <div>
            {members.map((member) => {
              return (
                <div key={member.relicID}>
                  <FactionIcon
                    ai={member.ai}
                    faction={member.faction}
                    style={{ width: "1.2em", height: "1.2em", marginRight: 4 }}
                  />
                  <CountryFlag
                    countryCode={member.country}
                    style={{ width: "1.2em", height: "1.2em", paddingRight: 0, marginRight: 4 }}
                  />
                  <Typography.Link>{member.name}</Typography.Link>
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      align: "center" as const,
      width: 50,
      render: (rank: number) => {
        if (rank < 0) {
          return "-";
        } else {
          return rank;
        }
      },
    },
    {
      title: "T Rank",
      dataIndex: "teamrank",
      key: "teamrank",
      align: "center" as const,
      width: 60,
      render: (teamrank: number) => {
        if (!teamrank) {
          return "";
        } else {
          if (teamrank < 0) {
            return "-";
          }
          return teamrank;
        }
      },
    },
    {
      title: (
        <>
          Level{" "}
          <Helper
            text={
              "Level 1 - 15 shows that you are better than bottom x% of players in the given leaderboard. Hover over the level to see the number." +
              " Level 16 - 20 are top 200 players."
            }
          />
        </>
      ),
      dataIndex: "ranklevel",
      key: "ranklevel",
      align: "center" as const,
      responsive: ["sm"],
      width: 70,
      render: (level: number) => {
        if (level <= 0) {
          return "-";
        } else {
          return <Tooltip title={levelToText(level)}>{level}</Tooltip>;
        }
      },
    },
    {
      title: "Streak",
      key: "streak",
      align: "center" as const,
      width: 50,
      responsive: ["md"],
      //sorter: (a, b) => a.streak - b.streak,
      render: (data: LadderStats) => {
        if (data.wins + data.losses > 0) {
          if (data.streak > 0) {
            return <div style={{ color: "green" }}>+{data.streak}</div>;
          } else {
            return <div style={{ color: "red" }}>{data.streak}</div>;
          }
        } else {
          return "-";
        }
      },
    },
    {
      title: "Ratio",
      key: "ratio",
      align: "center" as const,
      width: 40,
      /*sorter: (a, b) => {
        return (
          Math.round(100 * Number(a.wins / (a.losses + a.wins))) -
          Math.round(100 * Number(b.wins / (b.losses + b.wins)))
        );
      },*/
      render: (data: LadderStats) => {
        if (data.wins + data.losses > 0) {
          return <div>{Math.round(100 * Number(data.wins / (data.losses + data.wins)))}%</div>;
        } else {
          return "-";
        }
      },
    },
  ];

  return (
    <>
      <Table
        style={{ paddingBottom: 20, overflow: "auto" }}
        columns={TableColumns}
        dataSource={side.solo}
        rowKey={(record) =>
          record.members
            .map((member) => member.relicID + "" + member.faction + "" + member.name)
            .join("")
        }
        pagination={false}
        size={"small"}
      />
    </>
  );
};

export default TeamView;
