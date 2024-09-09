import { Button, Footer } from "flowbite-react";
import Container from "./Container";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterUI = () => {
  return (
    <section className="pb-16">
      <Container>
        <Footer container className="bg-lime-300 bg-opacity-25">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
              <div>
                <h1 className="text-2xl dark:text-white mb-4">
                  Be a part of our growing Cooking set
                </h1>
                <Button gradientDuoTone="tealToLime">
                  submit your recipe idea
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/recipes">Recipes</Footer.Link>
                    <Footer.Link href="#">New Idea</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="https://github.com/nusratneela27">
                      Github
                    </Footer.Link>
                    <Footer.Link href="https://www.linkedin.com/in/nusrat-jahan-neela/">
                      Linkdin
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Recipe™" year={2024} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
              </div>
            </div>
          </div>
        </Footer>
      </Container>
    </section>
  );
};

export default FooterUI;
