import React from 'react';
import { decodeText } from '../../helpers/text';

import {
  DefinitionBox,
  DefinitionEntryBox,
  DefinitionEntry,
  DefinitionSmall,
  DefinitionText,
  DefinitionFirst,
} from './Definition.style';

export const Definition = ({ def }) => {
  console.log(def);
  return (
    <DefinitionBox>
      <DefinitionEntryBox>
        <DefinitionFirst>{def.entry.slice(0, 1)}</DefinitionFirst>
        <DefinitionEntry>
          {def.entry}
          <DefinitionSmall>{def.fullName}</DefinitionSmall>
        </DefinitionEntry>
      </DefinitionEntryBox>
      <DefinitionText>{decodeText(def.description)}</DefinitionText>
    </DefinitionBox>
  );
};
