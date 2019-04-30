import ServiceManager from '../services/SvcManager'
import compression from 'compression'
import express from 'express'
import path from 'path'
import Debug from 'debug'

module.exports = function() {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  
  const router = express.Router()

  const shouldCompress = (req, res) => {
    return true
  }

  router.use(compression({
    filter: shouldCompress
  }))


  router.get('/:db/:modelId/newupdatematerials',
    async(req, res) => {

    try {

        const materialsname = req.params.name
        const materialspath = req.params.path
        console.log("name 跟 path为："+ materialsname+ materialspath)
        const response = {
            "a": 123,
            "b": 456
        }
        res.json(response)


    //   const modelSvc = ServiceManager.getService(
    //     db + '-ModelSvc')

    //   const response =
    //     await modelSvc.getUserData(
    //       req.params.modelId)

    //   res.json(response)

    } catch (error) {

      res.status(error.statusCode || 500)
      res.json(error)
    }
  })

  return router
}
