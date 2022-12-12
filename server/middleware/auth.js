const jwt = require('jsonwebtoken');
SECRET = process.env.SECRET

const Auth = {
  verifyToken(req, res, next){
      // token = req.cookies["JWT"]
      const {token} =  req.body
      if (token) {
          // 12. Lalukan jwt verify 
        const verified = jwt.verify(token, SECRET)
        req.verified = verified
        if(verified){
          console.log("Verifikasi Berhasil!");
          return next();
        } else {
          return res.status(401).send(error);
        }
      } else {
        res.status(403).send({message: 'Login terlebih dahulu!'})
          console.log('Anda tidak terautentikasi!');
      }
}
}

module.exports = Auth;