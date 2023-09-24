import {
  Platform
} from "react-native";
import {
  IMLocalized,
  setI18nConfig
} from "./Core/localization/IMLocalization";

setI18nConfig();

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;
const regexForAge = /[0-9]/g;

const DatingConfig = {
  isSMSAuthEnabled: true,
  appIdentifier: "rn-dating-android",
  onboardingConfig: {
    welcomeTitle: IMLocalized("Vibe with people!"),
    welcomeCaption: IMLocalized(
      "Match and chat with people you like from your area."
    ),
    walkthroughScreens: [{
        icon: require("../assets/images/Logo.png"),
        title: "Make a friend",
        description: IMLocalized(
          "Swipe right to become friends with students you like from your area."
        ),
      },
      {
        icon: require("../assets/images/chat.png"),
        title: "Private Messages",
        description: IMLocalized("Chat privately with people you match."),
      },
      {
        icon: require("../assets/images/instagram.png"),
        title: "Send Photos & Videos",
        description: IMLocalized(
          "Have fun with your matches by sending photos and videos to each other."
        ),
      },
      {
        icon: require("../assets/images/notification.png"),
        title: "Get Notified",
        description: IMLocalized(
          "Receive notifications when you get new messages and matches."
        ),
      },
    ],
  },
  tosLink: "https://lovia.love/terms.php",
  isUsernameFieldEnabled: false,
  smsSignupFields: [{
      displayName: IMLocalized("First Name"),
      type: "text",
      editable: true,
      regex: regexForNames,
      key: "firstName",
      placeholder: "First Name",
    },
    {
      displayName: IMLocalized("Last Name"),
      type: "text",
      editable: true,
      regex: regexForNames,
      key: "lastName",
      placeholder: "Last Name",
    },
    {
      displayName: IMLocalized("Username"),
      type: "text",
      editable: true,
      regex: regexForNames,
      key: "username",
      placeholder: "Username",
    },
  ],
  signupFields: [{
      displayName: IMLocalized("First Name"),
      type: "text",
      editable: true,
      regex: regexForNames,
      key: "firstName",
      placeholder: "First Name",
    },
    {
      displayName: IMLocalized("Last Name"),
      type: "text",
      editable: true,
      regex: regexForNames,
      key: "lastName",
      placeholder: "Last Name",
    },
    {
      displayName: IMLocalized("Username"),
      type: "text",
      editable: true,
      regex: regexForNames,
      key: "username",
      placeholder: "Username",
    },
    {
      displayName: IMLocalized("School"),
      type: "select",
      options: [
        "Universiteit Gent",
        "ArteveldeHogeschool",
        "LUCA School of Arts/ Campus Sint lucas Gent",
        "Hogeschool Gent",
        "Odisee Technologiecampus Gent",
        "De Hogeschool West-Vlaanderen",
        "KASK & Conservatorium",
      ],
      displayOptions: [
        "Universiteit Gent",
        "ArteveldeHogeschool",
        "LUCA School of Arts/ Campus Sint lucas Gent",
        "Hogeschool Gent",
        "Odisee Technologiecampus Gent",
        "De Hogeschool West-Vlaanderen",
        "KASK & Conservatorium",
      ],
      editable: true,
      key: "school",
      value: "All",
    },
    {
      displayName: IMLocalized("E-mail Address"),
      type: "text",
      editable: true,
      regex: regexForNames,
      key: "email",
      placeholder: "E-mail Address",
      autoCapitalize: "none",
    },
    {
      displayName: IMLocalized("Password"),
      type: "text",
      secureTextEntry: true,
      editable: true,
      regex: regexForNames,
      key: "password",
      placeholder: "Password",
      autoCapitalize: "none",
    },
    {
      displayName: IMLocalized("Gender"),
      type: "select",
      options: ["Female", "Male", "Other"],
      displayOptions: ["Female", "Male", "Other"],
      editable: true,
      key: "gender",
      value: "Other",
      autoCapitalize: "none",
    },

  ],

  privacyPolicyLink: "https://lovia.love/privacy.php",
  editProfileFields: {
    sections: [{
        title: IMLocalized("PUBLIC PROFILE"),
        fields: [{
            displayName: IMLocalized("First Name"),
            type: "text",
            editable: true,
            regex: regexForNames,
            key: "firstName",
            placeholder: "Your first name",
          },
          {
            displayName: IMLocalized("Last Name"),
            type: "text",
            editable: true,
            regex: regexForNames,
            key: "lastName",
            placeholder: "Your last name",
          },
          {
            displayName: IMLocalized("Age"),
            type: "text",
            editable: true,
            regex: regexForAge,
            key: "age",
            placeholder: "Your age",
          },
          {
            displayName: IMLocalized("Gender"),
            type: "select",
            options: ["female", "male", "other"],
            displayOptions: ["Female", "Male", "Other"],
            editable: true,
            key: "gender",
            value: "Other",
            autoCapitalize: "None",
          },
          {
            displayName: IMLocalized("Bio"),
            type: "text",
            editable: true,
            key: "bio",
            placeholder: "Your bio",
          },

          {
            displayName: IMLocalized("School"),
            type: "select",
            options: [
              "Universiteit Gent",
              "ArteveldeHogeschool",
              "LUCA School of Arts/ Campus Sint lucas Gent",
              "KU Leuven",
              "Hogeschool Gent",
              "Odisee Technologiecampus Gent",
              "De Hogeschool West-Vlaanderen",
              "KASK & Conservatorium",
            ],
            displayOptions: [
              "Universiteit Gent",
              "ArteveldeHogeschool",
              "LUCA School of Arts/ Campus Sint lucas Gent",
              "KU Leuven",
              "Hogeschool Gent",
              "Odisee Technologiecampus Gent",
              "De Hogeschool West-Vlaanderen",
              "KASK & Conservatorium",
            ],
            editable: true,
            key: "school",
            value: "Universiteit Gent",
          },

          {
            displayName: IMLocalized("Study"),
            type: "text",
            editable: true,
            // regex: regexForNames,
            key: "study",
            placeholder: "Your study",
          },
        ],
      },
      {
        title: IMLocalized("PRIVATE DETAILS"),
        fields: [{
            displayName: IMLocalized("E-mail Address"),
            type: "text",
            editable: false,
            key: "email",
            placeholder: "Your email address",
          },
          {
            displayName: IMLocalized("Phone Number"),
            type: "text",
            editable: true,
            regex: regexForPhoneNumber,
            key: "phone",
            placeholder: "Your phone number",
          },
        ],
      },
    ],
  },
  userSettingsFields: {
    sections: [{
        title: IMLocalized("DISCOVERY"),
        fields: [{
            displayName: IMLocalized("Show Me on Lovia"),
            type: "switch",
            editable: true,
            key: "show_me",
            value: true,
          },
          {
            displayName: IMLocalized("Distance Radius"),
            type: "select",
            options: ["5", "10", "15", "25", "50", "100", "unlimited"],
            displayOptions: [
              "5 Km",
              "10 Km",
              "15 Km",
              "25 Km",
              "50 Km",
              "100 Km",
              "Unlimited",
            ],
            editable: true,
            key: "distance_radius",
            value: "Unlimited",
          },

          {
            displayName: IMLocalized("Gender Preference"),
            type: "select",
            options: ["female", "male", "other", "all"],
            displayOptions: ["Female", "Male", "Other", "All"],
            editable: true,
            key: "gender_preference",
            value: "All",
            autoCapitalize: "None",
          },
          {
            displayName: IMLocalized("School Preference"),
            type: "select",
            options: [
              "Universiteit Gent",
              "ArteveldeHogeschool",
              "LUCA School of Arts/ Campus Sint lucas Gent",

              "Hogeschool Gent",
              "Odisee Technologiecampus Gent",
              "De Hogeschool West-Vlaanderen",
              "KASK & Conservatorium",
              "all",
            ],
            displayOptions: [
              "Universiteit Gent",
              "ArteveldeHogeschool",
              "LUCA School of Arts/ Campus Sint lucas Gent",

              "Hogeschool Gent",
              "Odisee Technologiecampus Gent",
              "De Hogeschool West-Vlaanderen",
              "KASK & Conservatorium",
              "All",
            ],
            editable: true,
            key: "school_preference",
            value: "All",
          },

          {
            displayName: IMLocalized("Wall Preference"),
            type: "select",
            options: ["all", "For You"],
            displayOptions: ["All", "For You"],
            editable: true,
            key: "wall_preference",
            value: "All",
            autoCapitalize: "None",
          },
          {
            displayName: IMLocalized("Change Language"),
            type: "select",
            options: ["English", "Dutch"], //["English", "France", "German", "Nederlands"],
            displayOptions: ["English", "Dutch"], //["English", "France", "German", "Nederlands"],
            editable: true,
            key: "change_language",
            value: "English",
          },
        ],
      },
      {
        title: IMLocalized("PUSH NOTIFICATIONS"),
        fields: [{
            displayName: IMLocalized("New friends"),
            type: "switch",
            editable: true,
            key: "push_new_matches_enabled",
            value: true,
          },
          {
            displayName: IMLocalized("Messages"),
            type: "switch",
            editable: true,
            key: "push_new_messages_enabled",
            value: true,
          },
          // {
          //   displayName: IMLocalized("Super Likes"),
          //   type: "switch",
          //   editable: true,
          //   key: "push_super_likes_enabled",
          //   value: true,
          // },
          // {
          //   displayName: IMLocalized("Top Picks"),
          //   type: "switch",
          //   editable: true,
          //   key: "push_top_picks_enabled",
          //   value: true,
          // },
        ],
      },
      {
        title: "",
        fields: [{
          displayName: IMLocalized("Save"),
          type: "button",
          key: "savebutton",
        }, ],
      },
    ],
  },
  contactUsFields: {
    sections: [{
        title: IMLocalized("CONTACT"),
        fields: [
          // {
          //   displayName: IMLocalized("Address"),
          //   type: "text",
          //   editable: false,
          //   key: "push_notifications_enabled",
          //   value: "Gérard Willemotlaan 30",
          // },
          {
            displayName: IMLocalized("E-mail us"),
            value: "loviastudents@gmail.com",
            type: "text",
            editable: false,
            key: "email",
            placeholder: "Your email address",
          },
        ],
      },
      {
        title: "",
        fields: [{
          displayName: IMLocalized("Call Us"),
          type: "button",
          key: "savebutton",
        }, ],
      },
    ],
  },
  dailySwipeLimit: 100000000000000000000000000000000000000000000000000000000000000000000000000000000,
  subscriptionSlideContents: [{
      title: IMLocalized("Go VIP"),
      description: IMLocalized(
        "When you subscribe, you get unlimited daily swipes, undo actions, VIP badge and more."
      ),
      src: require("../assets/images/fencing.png"),
    },
    {
      title: IMLocalized("Undo Actions"),
      description: IMLocalized("Get undo swipe actions when you subscribe."),
      src: require("../assets/images/vip_1.png"),
    },
    {
      title: IMLocalized("Vip Badge"),
      description: IMLocalized(
        "Stand out with vip badge amongst other swipes when you subscribe"
      ),
      src: require("../assets/images/vip_2.png"),
    },
    {
      title: IMLocalized("Enjoy Unlimited Access"),
      description: IMLocalized(
        "Get unlimited app access and more features to come."
      ),
      src: require("../assets/images/vip-pass.png"),
    },
  ],
  contactUsPhoneNumber: "+16504859694",
  IAP_SHARED_SECRET: "699db7fcf10c4922bf148caf334c89c6",
  IAP_SKUS: Platform.select({
    ios: [
      "com.instaswipey.FreeTrial.InstaswipeyAutoRenewableSubscriptionByMonth",
      "com.instaswipey.FreeTrial.InstaswipeyAutoRenewableSubscriptionByYear",
    ],
    android: ["annual_vip_subscription", "monthly_vip_subscription"],
  }),
  facebookIdentifier: "285315185217069",
};

export default DatingConfig;