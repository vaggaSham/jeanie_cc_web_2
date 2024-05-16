import { callApi, POST, GET } from "../../providers/apiAxiosUtils";

export function checkRegisteredMobileNumber(phone_number: any) {
  return callApi(
    `https://jeanie-import-members-contact-production-6emkfxvrka-uw.a.run.app/members/providers/${phone_number}/get_provider_profile`,
    GET
  );
}

export function changeNurseStatus(
  jeanie_member_id: any,
  jeanie_nurse_id: any,
  status: any
) {
  return callApi(
    `https://jeanie-telehealth-production-6emkfxvrka-uw.a.run.app/api/v1/healthcare/change_status_of_nurse/${jeanie_member_id}/${jeanie_nurse_id}/${status}`,
    GET
  );
}
