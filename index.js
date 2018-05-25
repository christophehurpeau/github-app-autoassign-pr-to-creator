module.exports = (robot) => {
  robot.on('pull_request.opened', async context => {
    const pr = context.payload.pull_request
    if (pr.assignees.length) return

    await context.github.issues.addAssigneesToIssue(context.issue({
      assignees: [pr.user.login]
    }))
  })
}
