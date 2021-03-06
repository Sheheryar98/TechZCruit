// ALERT
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

// AUTH
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const USER_LOADED = 'USER_LOADED';
export const NAME_UPDATED = 'NAME_UPDATED';
export const PASSWORD_UPDATED = 'PASSWORD_UPDATED';
export const PROFILE_PICTURE_UPLOADED = 'PROFILE_PICTURE_UPLOADED';
export const PROFILE_PICTURE_REMOVED = 'PROFILE_PICTURE_REMOVED';
export const LOGOUT = 'LOGOUT';
export const SIDE_NAV_TOGGLED = 'SIDE_NAV_TOGGLED';
export const AUTH_ERROR = 'AUTH_ERROR';

// PROFILE
export const PROFILE_LOADED = 'PROFILE_LOADED';
export const EXPERIENCE_ADDED = 'EXPERIENCE_ADDED';
export const EDUCATION_ADDED = 'EDUCATION_ADDED';
export const EXPERIENCE_REMOVED = 'EXPERIENCE_REMOVED';
export const EDUCATION_REMOVED = 'EDUCATION_REMOVED';
export const PROFILE_DELETED = 'PROFILE_DELETED';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const USER_DELETED = 'USER_DELETED';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const SET_PROFILE_LOADING = 'SET_PROFILE_LOADING';

// POST
export const ALL_POSTS_LOADED = 'ALL_POSTS_LOADED';
export const POST_LOADED = 'POST_LOADED';
export const POST_ADDED = 'POST_ADDED';
export const POST_LIKED = 'POST_LIKED';
export const POST_UNLIKED = 'POST_UNLIKED';
export const COMMENT_ADDED_POST = 'COMMENT_ADDED_POST';
export const COMMENT_REMOVED_POST = 'COMMENT_REMOVED_POST';
export const POST_REMOVED = 'POST_REMOVED';
export const POST_ERROR = 'POST_ERROR';
export const SET_POST_LOADING = 'SET_POST_LOADING';

// GROUP
export const ALL_GROUPS_LOADED = 'ALL_GROUPS_LOADED';
export const ALL_GROUPS_LOADED_FOR_USER = 'ALL_GROUPS_LOADED_FOR_USER';
export const GROUP_LOADED = 'GROUP_LOADED';
export const GROUP_CREATED = 'GROUP_CREATED';
export const GROUP_UPDATED = 'GROUP_UPDATED';
export const GROUP_REQUEST_SENT = 'GROUP_REQUEST_SENT';
export const GROUP_MEMBER_ADDED = 'GROUP_MEMBER_ADDED';
export const GROUP_REQUEST_DELETED = 'GROUP_REQUEST_DELETED';
export const GROUP_MEMBER_REMOVED = 'GROUP_MEMBER_REMOVED';
export const GROUP_DELETED = 'GROUP_DELETED';
export const GROUP_ERROR = 'GROUP_ERROR';
export const SET_GROUP_LOADING = 'SET_GROUP_LOADING';

// CAMPAIGN
export const All_CAMPAIGNS_LOADED = 'All_CAMPAIGNS_LOADED';
export const All_CAMPAIGNS_LOADED_FOR_USER = 'All_CAMPAIGNS_LOADED_FOR_USER';
export const CAMPAIGN_LOADED = 'CAMPAIGN_LOADED';
export const CAMPAIGN_CREATED = 'CAMPAIGN_CREATED';
export const CAMPAIGN_UPDATED = 'CAMPAIGN_UPDATED';
export const CAMPAIGN_SUPPORTED = 'CAMPAIGN_SUPPORTED';
export const COMMENT_ADDED_CAMPAIGN = 'COMMENT_ADDED_CAMPAIGN';
export const COMMENT_REMOVED_CAMPAIGN = 'COMMENT_REMOVED_CAMPAIGN';
export const CAMPAIGN_DELETED = 'CAMPAIGN_DELETED';
export const CAMPAIGN_ERROR = 'CAMPAIGN_ERROR';
export const SET_CAMPAIGN_LOADING = 'SET_CAMPAIGN_LOADING';

// TESTING
export const ALL_PROJECTS_LOADED = 'ALL_PROJECTS_LOADED';
export const ALL_PROJECTS_LOADED_FOR_USER = 'ALL_PROJECTS_LOADED_FOR_USER';
export const ALL_ONGOING_PROJECTS_LOADED_FOR_USER =
  'ALL_ONGOING_PROJECTS_LOADED_FOR_USER';
export const PROJECT_LOADED = 'PROJECT_LOADED';
export const PROJECT_CREATED = 'PROJECT_CREATED';
export const PROJECT_UPDATED = 'PROJECT_UPDATED';
export const PROJECT_OFFER_SENT = 'PROJECT_OFFER_SENT';
export const PROJECT_TESTER_ADDED = 'PROJECT_TESTER_ADDED';
export const PROJECT_TESTCASE_CREATED = 'PROJECT_TESTCASE_CREATED';
export const PROJECT_TESTCASE_PASSED = 'PROJECT_TESTCASE_PASSED';
export const PROJECT_TESTCASE_FAILED = 'PROJECT_TESTCASE_FAILED';
export const PROJECT_TESTING_FINISHED = 'PROJECT_TESTING_FINISHED';
export const COMMENT_ADDED_PROJECT = 'COMMENT_ADDED_PROJECT';
export const COMMENT_REMOVED_PROJECT = 'COMMENT_REMOVED_PROJECT';
export const PROJECT_TESTCASE_DELETED = 'PROJECT_TESTCASE_DELETED';
export const PROJECT_OFFER_DELETED = 'PROJECT_OFFER_DELETED';
export const PROJECT_DELETED = 'PROJECT_DELETED';
export const PROJECT_ERROR = 'PROJECT_ERROR';
export const SET_PROJECT_LOADING = 'SET_PROJECT_LOADING';

// PRODUCT
export const All_PRODUCTS_LOADED = 'All_PRODUCTS_LOADED';
export const All_PRODUCTS_LOADED_FOR_STORE = 'All_PRODUCTS_LOADED_FOR_STORE';
export const PRODUCT_LOADED = 'PRODUCT_LOADED';
export const PRODUCT_CREATED = 'PRODUCT_CREATED';
export const PRODUCT_UPDATED = 'PRODUCT_UPDATED';
export const PRODUCT_LIKED = 'PRODUCT_LIKED';
export const PRODUCT_UNLIKED = 'PRODUCT_UNLIKED';
export const PRODUCT_PURCHASED = 'PRODUCT_PURCHASED';
export const REVIEW_ADDED_PRODUCT = 'REVIEW_ADDED_PRODUCT';
export const REVIEW_REMOVED_PRODUCT = 'REVIEW_REMOVED';
export const PRODUCT_REMOVED = 'PRODUCT_REMOVED';
export const PRODUCT_ERROR = 'PRODUCT_ERROR';
export const SET_PRODUCT_LOADING = 'SET_PRODUCT_LOADING';

// STORE
export const All_STORES_LOADED = 'All_STORES_LOADED';
export const All_STORES_LOADED_FOR_CURRENT_USER =
  'All_STORES_LOADED_FOR_CURRENT_USER';
export const STORE_LOADED = 'STORE_LOADED';
export const STORE_CREATED = 'STORE_CREATED';
export const STORE_UPDATED = 'STORE_UPDATED';
export const STORE_REMOVED = 'STORE_REMOVED';
export const STORE_ERROR = 'STORE_ERROR';
export const SET_STORE_LOADING = 'SET_STORE_LOADING';

// SERVICE
export const All_SERVICES_LOADED = 'All_SERVICES_LOADED';
export const All_SERVICES_LOADED_FOR_CURRENT_USER =
  'All_SERVICES_LOADED_FOR_CURRENT_USER';
export const SERVICE_LOADED = 'SERVICE_LOADED';
export const SERVICE_CREATED = 'SERVICE_CREATED';
export const SERVICE_UPDATED = 'SERVICE_UPDATED';
export const SERVICE_REQUEST_SENT = 'SERVICE_REQUEST_SENT';
export const SERVICE_SERVICE_ADDED = 'SERVICE_SERVICE_ADDED';
export const SERVICE_SERVICE_FINISHED = 'SERVICE_SERVICE_FINISHED';
export const REVIEW_ADDED_SERVICE = 'REVIEW_ADDED_SERVICE';
export const REVIEW_REMOVED_SERVICE = 'REVIEW_REMOVED_SERVICE';
export const SERVICE_REQUEST_REMOVED = 'SERVICE_REQUEST_REMOVED';
export const SERVICE_REMOVED = 'SERVICE_REMOVED';
export const SERVICE_ERROR = 'SERVICE_ERROR';
export const SET_SERVICE_LOADING = 'SET_SERVICE_LOADING';

// SOCKET IO
export const ALL_CONVERSATIONS_LOADED = 'ALL_CONVERSATIONS_LOADED';
export const CONVERSATION_LOADED = 'CONVERSATION_LOADED';
export const CONVERSATION_CREATED = 'CONVERSATION_CREATED';
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
export const CONVERSATION_ERROR = 'CONVERSATION_ERROR';
export const SET_CONVERSATION_LOADING = 'SET_CONVERSATION_LOADING';
