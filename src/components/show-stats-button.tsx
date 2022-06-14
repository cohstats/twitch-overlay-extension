import { Button, Tooltip } from "antd";
import React from "react";

interface IProps {
  bottomButtonPosition?: string | any;
  leftButtonPosition?: string | any;
  showStatsButtonColor: string | any;
  showStatsButtonTextColor: string | any;
  showStatsButtonSize: string | any;
  showStatsButtonShape: string | any;
  twitchPlayerTooSmall?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  showDrawer?: Function | any;
  showStatsButtonText: string | any;
}

export const ShowStatsButton: React.FC<IProps> = ({
  bottomButtonPosition,
  leftButtonPosition,
  showStatsButtonColor,
  showStatsButtonTextColor,
  showStatsButtonSize,
  showStatsButtonShape,
  twitchPlayerTooSmall,
  showDrawer,
  showStatsButtonText,
}) => {
  let style = {
    position: "absolute",
    background: showStatsButtonColor,
    borderColor: showStatsButtonColor,
    color: showStatsButtonTextColor,
  };

  if (leftButtonPosition && bottomButtonPosition) {
    style = {
      ...style,
      ...{
        bottom: bottomButtonPosition,
        left: leftButtonPosition,
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onClick = showDrawer ? showDrawer : () => {};
  const isTwitchPlayerTooSmall = twitchPlayerTooSmall ? twitchPlayerTooSmall : false;

  return (
    <>
      <Button
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        style={style}
        shape={showStatsButtonShape}
        size={showStatsButtonSize}
        type={isTwitchPlayerTooSmall ? "dashed" : "primary"}
        danger={isTwitchPlayerTooSmall}
        onClick={onClick}
      >
        {isTwitchPlayerTooSmall ? (
          <>
            <Tooltip overlay={"Cannot display stats because the twitch player view is too small"}>
              Show Player Stats
            </Tooltip>
          </>
        ) : (
          <>{showStatsButtonText}</>
        )}
      </Button>
    </>
  );
};
