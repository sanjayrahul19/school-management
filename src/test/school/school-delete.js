import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server";

chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

export const schoolDelete = () => {
  it("school delete api", (done) => {
    chai
      .request(app)
      .delete("/api/v1/delete-school/641199fc30e3cc3f9b4ba9a1")

      .end((err, res) => {
        if (err) return done(err);
        if (res.status === 200) {
          res.should.have.status(200);
          res.body.should.have.a("object");
          res.body.should.have
            .property("message")
            .eq("School deleted successfully");
        } else {
          res.should.have.status(500);
        }
        done();
      });
  });
};
