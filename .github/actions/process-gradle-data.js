module.exports = async ({github, context, core, require}) => {
    const { DATA } = process.env
    const projectData = JSON.parse(DATA)

    console.log(`Data: ${projectData}`)
}