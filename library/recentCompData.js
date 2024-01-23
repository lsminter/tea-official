const recentCompetition = await fetch(`https://api.wiseoldman.net/v2/groups/651/competitions`)
  .then(response => response.json())
  .then(data => data[0])

export const eventDataFetch =
    await fetch(`https://api.wiseoldman.net/v2/competitions/${recentCompetition.id}`)
      .then(response => response.json())
      .then(data => data)
