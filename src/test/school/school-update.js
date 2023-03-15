import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server";

chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

export const schoolUpdate = () => {
  it("school update api", (done) => {
    chai
      .request(app)
      .patch("/api/v1/update-school/64119f1b293f6569678c1d49")
      .send({
        school_name: "KVS MAT",
      })
      .end((err, res) => {
        if (err) return done(err);
        if (res.status === 200) {
          res.should.have.status(200);
          res.body.should.have.a("object");
          res.body.should.have
            .property("message")
            .eq("School details updated successfully");
        } else {
          res.should.have.status(500);
        }
        done();
      });
  });
};
