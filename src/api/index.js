import ajax from '../helper/ajax';
import urls from '../utils/urls';
const { API_URL, GITHUB_API } = urls;
const AUTH_API_PREFIX = 'aaa';
const CMS_API_PREFIX = 'cms';
const SUSI_API_PREFIX = 'susi';

export function fetchApiKeys(payload) {
  const url = `${API_URL}/${AUTH_API_PREFIX}/getApiKeys.json`;
  return ajax.get(url);
}

export function getLogin(payload) {
  const { email, password } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/login.json`;
  return ajax.get(url, { login: email, password, type: 'access-token' });
}

export function getSignup(payload) {
  const { email, password } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/signup.json`;
  return ajax.get(url, { signup: email, password });
}

export function getAdmin(payload) {
  const url = `${API_URL}/${AUTH_API_PREFIX}/showAdminService.json`;
  return ajax.get(url, payload);
}

export function getForgotPassword(payload) {
  const { email } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/recoverpassword.json`;
  return ajax.get(url, { forgotemail: email });
}

export function fetchMetricsSkills(payload) {
  const { languageValue } = payload;
  const url = `${urls.API_URL}/cms/getSkillMetricsData.json`;
  return ajax.get(url, {
    language: languageValue,
  });
}

export function fetchLanguageOptions(payload) {
  const { groupValue } = payload;
  const url = `${urls.API_URL}/cms/getAllLanguages.json`;
  return ajax.get(url, { group: groupValue });
}

export function fetchGroupOptions() {
  const url = `${urls.API_URL}/cms/getGroups.json`;
  return ajax.get(url, {});
}

export function fetchSkills(payload) {
  const {
    groupValue,
    language,
    filterName,
    filterType,
    showReviewedSkills,
    showStaffPicks,
    searchQuery,
  } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillList.json`;
  return ajax.get(url, {
    group: groupValue,
    language: language,
    applyFilter: 'true',
    filter_name: filterName,
    filter_type: filterType,
    reviewed: showReviewedSkills,
    staff_picks: showStaffPicks,
    q: searchQuery,
  });
}

export function fetchSkillMetaData(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillMetadata.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function fetchUserSkillRating(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getRatingByUser.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function changeRating(payload) {
  const { model, group, language, skill, stars } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/fiveStarRateSkill.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
    stars,
  });
}

export function fetchDateWiseSkillUsage(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillUsage.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function fetchCountryWiseSkillUsage(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getCountryWiseSkillUsage.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function fetchDeviceWiseSkillUsage(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getDeviceWiseSkillUsage.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function fetchRatingsOverTime(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getRatingsOverTime.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function fetchSkillFeedbacks(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillFeedback.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function postSkillFeedback(payload) {
  const { model, group, language, skill, feedback } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/feedbackSkill.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
    feedback,
  });
}

export function deleteSkillFeedback(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/removeFeedback.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function reportSkill(payload) {
  const { model, group, language, skill, feedback } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/reportSkill.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
    feedback,
  });
}

export function fetchSkillsByAuthor(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillsByAuthor.json`;
  return ajax.get(url, payload);
}

export function deleteSkill(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/deleteSkill.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function updateSkill(payload, urlParam) {
  const url = `${API_URL}/${CMS_API_PREFIX}/${urlParam}`;
  return ajax.post(url, payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
    isTokenRequired: false,
  });
}

export function createSkill(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/createSkill.json`;
  return ajax.post(url, payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
    isTokenRequired: false,
  });
}

export function modifySkill(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/modifySkill.json`;
  return ajax.post(url, payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
    isTokenRequired: false,
  });
}

export function fetchAllLanguageOptions() {
  const url = `${API_URL}/${CMS_API_PREFIX}/getAllLanguages.json`;
  return ajax.get(url, {});
}

export function fetchAllGroupOptions() {
  const url = `${API_URL}/${CMS_API_PREFIX}/getGroups.json`;
  return ajax.get(url, {});
}

export function fetchSkillByCommitId(payload) {
  const { skill, model, group, language, commitID } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getFileAtCommitID.json`;
  return ajax.get(url, {
    skill,
    model,
    group,
    language,
    commitID,
  });
}

export function fetchSkillCode(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkill.json`;
  return ajax.get(url, payload);
}

export function fetchAuthorUrl(payload) {
  const { email } = payload;
  const url = `${GITHUB_API}/search/users`;
  return ajax.get(
    url,
    {
      q: email,
    },
    { isTokenRequired: false },
  );
}

export function fetchConversationResponse(payload) {
  const { q, instant } = payload;
  const url = `${API_URL}/${SUSI_API_PREFIX}/chat.json`;
  return ajax.get(url, {
    q,
    instant,
  });
}

export function listUserSettings() {
  const url = `${API_URL}/${AUTH_API_PREFIX}/listUserSettings.json`;
  return ajax.get(url, {});
}

// Botbuilder API

export function fetchChatBots() {
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillList.json`;
  return ajax.get(url, {
    private: 1,
  });
}

export function fetchBotImages(payload) {
  const { name: skill, language, group } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkill.json`;
  return ajax.get(url, {
    group,
    language,
    skill,
    private: 1,
  });
}

export function fetchBotDetails(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkill.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
    private: 1,
  });
}

export function deleteChatBot(payload) {
  const { group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/deleteSkill.json`;
  return ajax.get(url, {
    private: 1,
    group,
    language,
    skill,
  });
}

export function readDraft(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/readDraft.json`;
  return ajax.get(url, { ...payload });
}

export function deleteDraft(payload) {
  const { id } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/deleteDraft.json`;
  return ajax.get(url, { id });
}

export function storeDraft(payload) {
  const { object } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/storeDraft.json`;
  return ajax.get(url, { object });
}

export function uploadBotImage(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/uploadImage.json`;
  return ajax.post(url, payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
    isTokenRequired: false,
  });
}
export function fetchUserRatings(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/getProfileDetails.json`;
  return ajax.get(url, {});
}

export function fetchUserSkill(payload) {
  const { filterName, filterType } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillList.json`;
  return ajax.get(url, {
    filter_name: filterName,
    filter_type: filterType,
    applyFilter: 'true',
  });
}

export function getEmailExists(payload) {
  const { email } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/checkRegistration.json`;
  return ajax.get(url, {
    check_email: email,
  });
}

export function getSusiPreviewReply(message) {
  const url = `${API_URL}/${SUSI_API_PREFIX}/chat.json`;
  return ajax.get(url, { q: message });
}

export function fetchCommitHistory(payload) {
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillHistory.json`;
  return ajax.get(url, { ...payload });
}

export function deleteBot(payload) {
  const { name: skill, language, group } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/deleteSkill.json`;
  return ajax.get(url, {
    private: 1,
    group,
    language,
    skill,
  });
}

// Admin components

// Admin.js
export function fetchAdminUserStats(payload) {
  const url = `${API_URL}/${AUTH_API_PREFIX}/getUsers.json`;
  return ajax.get(url, payload);
}

export function fetchAdminUserSkill() {
  const url = `${API_URL}/${CMS_API_PREFIX}/getSkillList.json`;
  return ajax.get(url, {});
}

// ListSkills
export function changeSkillStatus(payload) {
  const {
    model,
    group,
    language,
    skill,
    reviewed,
    editable,
    staffPick,
    systemSkill,
  } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/changeSkillStatus.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
    reviewed,
    editable,
    staffPick,
    systemSkill,
  });
}

export function undoDeleteSkill(payload) {
  const { model, group, language, skill } = payload;
  const url = `${API_URL}/${CMS_API_PREFIX}/undoDeleteSkill.json`;
  return ajax.get(url, {
    model,
    group,
    language,
    skill,
  });
}

export function skillsToBeDeleted() {
  const url = `${API_URL}/${CMS_API_PREFIX}/skillsToBeDeleted.json`;
  return ajax.get(url, {});
}

// ListUser
export function changeUserRole(payload) {
  const { user, role } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/changeRoles.json`;
  return ajax.get(url, { user, role });
}

export function deleteUserAccount(payload) {
  const { email } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/deleteUserAccount`;
  return ajax.get(url, { email });
}

export function modifyUserDevices(payload) {
  const { email, macid, name, room } = payload;
  const url = `${API_URL}/${AUTH_API_PREFIX}/modifyUserDevices.json`;
  return ajax.get(url, { email, macid, name, room });
}

// SystemLogs
export function fetchSystemLogs(payload) {
  const { count } = payload;
  const url = `${urls.API_URL}/log.txt`;
  return ajax.get(url, { count });
}

export function fetchLatestCommitInformation(payload) {
  const { url } = payload;
  return ajax.get(url, {});
}

export function fetchRevertingCommitInformation(payload) {
  const { url } = payload;
  return ajax.get(url, {});
}