import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native-appearance";
import PropTypes from "prop-types";
import IMConversationIconView from "./IMConversationIconView/IMConversationIconView";
import { timeFormat } from "../..";
import dynamicStyles from "./styles";
import { formatMessage } from "../helpers/utils";

function IMConversationView(props) {
  const { onChatItemPress, item, user, appStyles } = props;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  const userID = user.userID || user.id;

  let title = item.title;

  const getIsRead = () => {
    return item.markedAsRead;
  };

  console.log("content : ", item);

  return (
    <TouchableOpacity
      onPress={() => onChatItemPress(item)}
      style={styles.chatItemContainer}
    >
      <IMConversationIconView
        participants={item.participants}
        appStyles={appStyles}
      />
      <View style={styles.chatItemContent}>
        <Text
          style={[styles.chatFriendName, !getIsRead() && styles.unReadmessage]}
        >
          {title}
        </Text>
        <View style={styles.content}>
          <Text
            numberOfLines={1}
            ellipsizeMode={"middle"}
            style={[styles.message, !getIsRead() && styles.unReadmessage]}
          >
            {formatMessage(
              item.content.mime == "gif" ? "Someone send a gif." : item.content
            )}{" "}
            {" · "}
            <Text
              numberOfLines={1}
              ellipsizeMode={"middle"}
              style={[styles.message, !getIsRead() && styles.unReadmessage]}
            >
              {timeFormat(item.createdAt)}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

IMConversationView.propTypes = {
  item: PropTypes.object,
  onChatItemPress: PropTypes.func,
};

export default IMConversationView;
