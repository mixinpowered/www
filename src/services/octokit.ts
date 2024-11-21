import { Octokit } from 'octokit'

const octokit = new Octokit({ auth: import.meta.env.GITHUB_AUTH_TOKEN })

export const getMembers = async () => {
  const response = await octokit.request('GET /orgs/{org}/members', {
    org: 'mixinpowered',
  })

  return response.data.map((member) => {
    return {
      username: member.login,
      avatar: member.avatar_url,
      url: member.html_url,
    }
  })
}

export const getOutsideCollaborators = async () => {
  const response = await octokit.request(
    'GET /orgs/{org}/outside_collaborators',
    {
      org: 'mixinpowered',
    },
  )

  return response.data.map((member) => {
    return {
      avatar: member.avatar_url,
      url: member.html_url,
    }
  })
}
