import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server";

chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

export const schoolDetails = () => {
  it("school details api", (done) => {
    chai
      .request(app)
      .get("/api/v1/all-school")
      .end((err, res) => {
        if (err) return done(err);
        if (res.status === 200) {
          res.should.have.status(200);
          res.body.should.have.a("object");
          res.body.should.have
            .property("message")
            .eq("All school details sent successfully");
        } else {
          res.should.have.status(500);
        }
        done();
      });
  });
};
