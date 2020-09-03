import React from "react";
import {
  TextContent,
  Text,
  TextVariants,
  TextList,
  TextListVariants,
  TextListItem,
  TextListItemVariants,
} from "@patternfly/react-core";

export const Samples = () => (
  <div className="samples">
    <TextContent>
      <Text component={TextVariants.h1}>Hello World</Text>
      <Text component={TextVariants.h2}>Second level</Text>
      <Text component={TextVariants.h3}>Third level</Text>
      <Text component={TextVariants.h4}>Fourth level</Text>
      <Text component={TextVariants.h5}>Fifth level</Text>
      <Text component={TextVariants.h6}>Sixth level</Text>
    </TextContent>
  </div>
);
