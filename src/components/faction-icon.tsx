import React from "react";
// tell webpack to import these images
// TODO: find a cleaner solution
import aef from "../../public/generalIcons/aef.png";
import aef_ai from "../../public/generalIcons/aef_ai.png";
import aef_large from "../../public/generalIcons/aef_large.png";
import british from "../../public/generalIcons/british.png";
import british_ai from "../../public/generalIcons/british_ai.png";
import british_large from "../../public/generalIcons/british_large.png";
import german from "../../public/generalIcons/german.png";
import german_ai from "../../public/generalIcons/german_ai.png";
import german_large from "../../public/generalIcons/german_large.png";
import soviet from "../../public/generalIcons/soviet.png";
import soviet_ai from "../../public/generalIcons/soviet_ai.png";
import soviet_large from "../../public/generalIcons/soviet_large.png";
import west_german from "../../public/generalIcons/west_german.png";
import west_german_ai from "../../public/generalIcons/west_german_ai.png";
import west_german_large from "../../public/generalIcons/west_german_large.png";

interface Props {
  faction: string;
  large?: boolean;
  ai?: boolean;
  style?: React.CSSProperties;
}
export const FactionIcon: React.FC<Props> = ({ faction, ai, large, style }) => {
  const lookupTable: Record<string, string> = {
    german: german,
    soviet: soviet,
    west_german: west_german,
    aef: aef,
    british: british,
  };
  if (ai) {
    lookupTable.german = german_ai;
    lookupTable.soviet = soviet_ai;
    lookupTable.west_german = west_german_ai;
    lookupTable.aef = aef_ai;
    lookupTable.british = british_ai;
  }
  if (large) {
    lookupTable.german = german_large;
    lookupTable.soviet = soviet_large;
    lookupTable.west_german = west_german_large;
    lookupTable.aef = aef_large;
    lookupTable.british = british_large;
  }

  return (
    <>
      <img src={lookupTable[faction]} style={style} alt={faction} />
    </>
  );
};
