class Github {
  constructor() {
    this.ClientID = "6a9a799efc803e3c2bf1";
    this.clientKey = "d98670dadacda0cf4ed573b5a57da4753e8a11c9";
    this.repoCount = 5,
      this.repoSort = "created: asc"
  }

  async getUsers(username) {
    const ProfileDetails = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.ClientID}&client_secret=${this.ClientSecret}`
    );
    const repoDetails = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${this.repoCount}&sort=${this.repoSort}&client_id=${this.ClientID}&client_secret=${this.ClientSecret}`
    );

    const profile = await ProfileDetails.json();
    const repo = await repoDetails.json();

    return {profile, repo}
  }
}