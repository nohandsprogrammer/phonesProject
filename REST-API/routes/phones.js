const phonesRoutes = (app, fs) => {

    //DB path
    const dataPath = './db/phones.json';
    
    //Refactorizing by (https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files)
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
            throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };
    
      const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
            if (err) {
            throw err;
            }

            callback();
        });
    };

    //GET phones
    app.get('/phones', (req, res) => {
        if(Object.keys(req.query).length !== 0){
            readFile(data => {
                if(req.query['q']){     
                    const query = req.query['q'];
                    data = filteringName(data, query);
                }

                if(req.query['limit']){     
                    const query = parseInt(req.query['limit']);
                    data = data.slice(0, query);
                } 

                res.send(data);
            }, true);    
        } else {
            readFile(data => {
                res.send(data);
            }, true);
        }
    });

    app.get('/phones/:id', (req, res) => {
        readFile(data => {
            const userId = req.params['id'];
            res.send(filteringId(data, userId));
        }, true);
    });


    //CREATE phones
    app.post('/phones', (req, res) => {
        readFile(data => {
            data = [...data, req.body];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new phone added');
            });
        }, true);
      });
    

    //UPDATE a phone
    app.put('/phones/:id', (req, res) => {
        readFile(data => {
            const userId = req.params['id'];
            
            const dataValues = Object.values(data);

            for(let i = 0; i < dataValues.length; i++){
                if(dataValues[i]['id'] === userId){
                    dataValues[i] = req.body;
                    break;
                }
            }
        
            writeFile(JSON.stringify(dataValues, null, 2), () => {
            res.status(200).send(`phone id:${userId} updated`);
            });
        }, true);
    });


    //DELETE a phone
    app.delete('/phones/:id', (req, res) => {
        readFile(data => {
            const userId = req.params['id'];

            for(let i = 0; i < data.length; i++){
                if(data[i]['id'] === userId){
                    delete data[i];
                    break;
                }
            }

            //Await until DB is ready
            setTimeout(() => {
                writeFile(JSON.stringify(dataFiltered(data), null, 2), () => {
                    res.status(200).send(`phone id:${userId} updated`);
                    });
            }, 1000)
        }, true);
    });


    //Fuctions to filter fields in our DB
    const filteringId = (data, id) => data.filter(phoneData => phoneData.id == id);
    const filteringName = (data, q) => data.filter(phoneData => (phoneData.name.toLowerCase()).includes(q.toLowerCase()));
    const dataFiltered = (data) => data.filter(p => p !== null);
  };

  
  module.exports = phonesRoutes;