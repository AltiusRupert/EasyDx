const express = require('express');
const bodyParser = require('body-parser');
const cmd = require('node-cmd');
const fs = require('fs');

const listOrgRouter = express.Router();

listOrgRouter.use(bodyParser.json());

listOrgRouter.route('/')
.post((req, res) => {
    let directory = req.body.directory;
    const sfdxProjFileName = 'sfdx-project.json';
    const isWin = process.platform === "win32";
    let directoryDelimeter = "/";
    if(isWin) {
        directoryDelimeter = "\\";
    }

    fs.access(directory + directoryDelimeter + sfdxProjFileName, (err) => {
        if(err) {
            res.statusCode = 202;
            res.send({err: 'The filepath doesnot exist or doesnot contain a valid sfdx project!'});
            console.log(err);
            return;
        }
        cmd.get(
            `cd ${directory} && sfdx force:org:list --json`,
            function(err, data, stderr) {
                if(!err) {
                    res.statusCode = 200;
                    res.send(data);
                } else {
                    res.statusCode = 202;
                    let errObj = JSON.parse(stderr);
                    res.send({"err": errObj.message});
                }
            }
        );
    });
});

module.exports = listOrgRouter;