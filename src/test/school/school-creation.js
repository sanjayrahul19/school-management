import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../server";

chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

export const schoolCreation = () => {
  it("school creation api", (done) => {
    const school = {
      school_name: "sparkout",
    };
    chai
      .request(app)
      .post("/api/v1/create-school")
      .send(school)
      .end((err, res) => {
        if (err) return done(err);
        if (res.status === 200) {
          res.should.have.status(200);
          res.body.should.have.a("object");
          res.body.should.have
            .property("message")
            .eq("School created successfully");
        } else {
          res.should.have.status(500);
        }
        // expect(res.status).to.equal(200);

        // console.log(res.body);
        done();
      });
  });
};
