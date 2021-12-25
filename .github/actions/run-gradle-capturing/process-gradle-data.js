const TEST_CLASSPATH = 'test-classpath.txt';
async function processTestOutput(github, core, fs, testRoots) {
    for (let root in testRoots) {
        let classpath =  await fs.r
    }
}

/**
 * Parse a javac log and produce structured [RDFormat](https://github.com/reviewdog/reviewdog/tree/master/proto/rdf) output.
 * 
 * This allows javac logs to be piped right into reviewdog
 * 
 * @param {*} javacLogs list of absolute paths to javac task outputs
 * @param {*} fs the filesystem import
 * @param {*} dest The path of the file to write out to
 */
async function javacToRdFormat(javacLogs, fs, dest) {

}

module.exports = async ({github, context, core, require}) => {
    const { DATA } = process.env;
    const projectData = JSON.parse(DATA);
    const fs = require('fs/promises');

    let testPromise = processTestOutput(github, core, fs, projectData.testExecutions);

    console.log(`Data: ${projectData.keys()}`)
}