/**
 * Created by nmtuan on 06-Jun-16.
 */
function UserInfo() {

    //Basic Infos
    this.name = [ "", "" ];
    this.gender = true;
    this.workInfo = {
        location : "",
        industry : ""
    };

    this.profileUrl = "";
    this.profileImg = "images/profile-default-man.png";
    this.coverImg = "images/cover-default.png";
    this.caredCauses = [];
    this.education = [];
    this.experience = [];
    this.followers = 0;
    this.headline = "";
    this.isInfluencer = true;
    this.skills = [];
    this.summary = "";
    this.supportedOrganizations = [];
};