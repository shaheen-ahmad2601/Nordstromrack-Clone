import "./home.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Home = () => {
  const slideImages = [
    {
      url: "https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200&w=1608",
    },
    {
      url: "https://n.nordstrommedia.com/id/8e5265d7-94bb-48db-9ca3-987f766a0d3a.jpeg?h=200&w=1608",
    },
    {
      url: "https://n.nordstrommedia.com/id/ce7ea4f5-bf22-476a-836b-2194e885c59e.jpeg?h=200&w=1608",
    },
  ];

  const slideImages2 = [
    {
      url: "https://n.nordstrommedia.com/id/2749ff69-f124-4d9d-bb10-993652799a79.jpeg?h=700&w=1608",
      caption: {
        name: "Color Therapy",
        subName:
          "Colorful eyeshadow and cheek palettes, blush, an eyeshadow stick, lipstick and lip liner.Color Therapy Bright, bold makeup is back with high-impact hues for eyes, lips and cheeks in every shade of the spectrum.",
      },
    },
    {
      url: "https://n.nordstrommedia.com/id/691f346b-379c-47cd-a614-6aabd4ed8be7.jpeg?h=700&w=1608",
      caption: {
        name: "All Dressed Up",
        subName: "Bold looks for all the summer soirées on your agenda.",
      },
    },
    {
      url: "https://n.nordstrommedia.com/id/90f377d5-877c-4a24-b2a7-0fcfa84fcc6c.jpeg?h=720&w=1608",
      caption: {
        name: "",
        subName: "",
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className='main'>
        {/* display 1 */}
        <div className='display1'>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className='each-slide' key={index}>
                <img src={slideImage.url} alt='' />
              </div>
            ))}
          </Slide>
        </div>
        {/* display2 */}
        <div className='display2'>
          <Slide>
            {slideImages2.map((slideImages2, index) => (
              <div className='each-slide' key={index}>
                <img src={slideImages2.url} alt='' />
                <span>
                  <div>
                    <h3>{slideImages2.caption.name}</h3>
                  </div>
                  <div>{slideImages2.caption.subName}</div>
                </span>
              </div>
            ))}
          </Slide>
        </div>
        {/* great deals */}
        <div className='great'>
          <h3>Great deals on popular items</h3>
          <p>New markdowns on our best-sellers</p>
        </div>
        <div className='image1'>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/858d503f-ecea-47f8-a517-cf9a584682ed.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Marc Jacobs</h4>
              <h5>$159.97</h5>
              <span>(Up to 59% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/28516edf-723e-4071-a0f0-9d6a1667f037.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Dolce Vite</h4>
              <h5>$59.97</h5>
              <span>(Up to 50% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/a51516c1-15f3-4f56-b0ed-235f31fce475.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Marc Jacobs</h4>
              <h5>$79.97</h5>
              <span>(Up to 58% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/c2a245a8-f097-4c18-8afd-a650f4f67846.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Steven New York</h4>
              <h5>$39.97</h5>
              <span>(Up to 49% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/0c0dcf0d-391a-4109-a012-826d05dc894b.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Ray-Ban</h4>
              <h5>$74.97</h5>
              <span>(Up to 59% off)</span>
            </div>
          </div>
        </div>
        <div className='mom'>
          <div className='formom'>
            <img
              src='https://n.nordstrommedia.com/id/59f4195c-0e83-4694-8caa-023699806f73.jpeg?h=700&w=1608'
              alt='gift for mom'
            />
          </div>

          <div className='mother'>
            <h3>Mother's Day Is This Sunday!</h3>
            <p>
              Need a perfect gift by Mother's Day? You can still get it in time
              with expedited shipping and store pickup options. See delivery
              dates at checkout.
            </p>
          </div>
        </div>
        <hr></hr>
        <div>
          <h2>TRENDING NOW</h2>
        </div>
        {/* trending now */}
        <div className='trending'>
          <div className='opt'>
            <img
              src='https://n.nordstrommedia.com/id/477f3419-48db-4448-bcdf-1ee9a9af1ca8.jpeg?h=522&w=804'
              alt='#'
            />
            <h3>It's All in the Shoe Details</h3>
            <p>
              Opt for eye-catching volume and interesting textures in the
              most-wanted spring sandals, from Circus by Sam Edelman and more.
            </p>
          </div>
          <div className='opt'>
            <img
              src='https://n.nordstrommedia.com/id/7cae6918-5b6d-4855-967a-4318802fa308.jpeg?h=522&w=804'
              alt='#'
            />
            <h3>Celebrate in Style</h3>
            <p>
              From graduations to end-of-season parties, capture the joy of the
              moment with the perfect outfit.
            </p>
          </div>
        </div>
        <div className='confidence'>
          <div className='cimg'>
            <img
              src='https://n.nordstrommedia.com/id/65237083-ac2a-4dbf-9bb5-637d14d1de9b.jpeg?h=700&w=1608'
              alt='#'
            />
          </div>
          <div className='thenew'>
            <h3>The New Sexy</h3>
            <p>Confidence is your best accessory with these standout styles.</p>
          </div>
        </div>
        <div>
          <h2>Shop the trend</h2>
        </div>
        <div className='image1'>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/5c126114-fc6f-49df-8a5d-276f24beed4d.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Love By Design</h4>
              <h5>$49.97</h5>
              <span>(Up to 47% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/422fd575-1368-4a6f-a96a-433590eb6101.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>ENCHANTE HOME</h4>
              <h5>$26.59</h5>
              <span>(Up to 87% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/777583e7-508d-408f-bdbd-5313c023a91e.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>ASTR thr Label</h4>
              <h5>$49.97</h5>
              <span>(Up to 49% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/bb4785fc-d068-413b-b549-80ab8d68fd03.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Love By Design</h4>
              <h5>$44.97</h5>
              <span>(Up to 54% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/77559d7e-f15d-4560-b96a-7ca319190899.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Supplies By Union Bay</h4>
              <h5>$29.97</h5>
              <span>(Up to 40% off)</span>
            </div>
          </div>
        </div>
        <div className='intro'>
          <div className='d1'>
            <div>
              <img
                src='	https://n.nordstrommedia.com/id/7e999614-e6ab-4dbd-bf4b-433e24b9c6e1.jpeg?h=516&w=536'
                alt='#'
              />
            </div>
            <div>
              <h3>Introducing Misette</h3>
              <p>
                Artful dinnerware to elevate your everyday, with curated
                collections you can use as a complete set or mix and match for
                an effortless tablescape.
              </p>
            </div>
          </div>
          <div className='d1'>
            <div>
              <img
                src='	https://n.nordstrommedia.com/id/984e1d98-87c3-4ad6-891c-00718b70ae97.jpeg?h=516&w=536'
                alt='#'
              />
            </div>
            <div>
              <h3>New Arrivals from LAGOS</h3>
              <p>
                Treat yourself to gorgeous styles from the Caviar Color and
                Covet collections.
              </p>
            </div>
          </div>
          <div className='d1'>
            <div>
              <img
                src='	https://n.nordstrommedia.com/id/22a3e98f-09d6-4acf-a650-b1c6d5755457.jpeg?h=516&w=536'
                alt='#'
              />
            </div>
            <div>
              <h3>Nude Is Not One Color</h3>
              <p>
                Nordstrom intimates that celebrate your skin, now in even more
                shades and sizes.
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <h2>SHOP YOUR WAY</h2>
        </div>
        <div className='way'>
          <img
            src='https://n.nordstrommedia.com/id/9af9866a-ff51-45fe-b2fe-3f5a33fc811e.jpeg?h=400&w=1608'
            alt='#'
          />
        </div>
        {/* Best-selling items */}
        <div className='great'>
          <h3>Best-selling items</h3>
          <p>The most-purchased items on our site right now</p>
        </div>
        <div className='image1'>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/647169c4-4739-4ec2-b175-033fd433f3e2.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Steve Maddden</h4>
              <h5>$59.97</h5>
              <span>(Up to 33% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/006f54ba-7f3c-4d44-bf18-755d3a7dcb9c.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Giuseppe Zanotti</h4>
              <h5>$549.99</h5>
              <span>(Up to 34% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/9e5a4335-5354-46e5-b42f-b8c135f322a8.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>By Design</h4>
              <h5>$49.97</h5>
              <span>(Up to 49% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/d6c3900a-36de-4176-95a3-a763d372f553.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Kate Spade new york</h4>
              <h5>$99.97</h5>
              <span>(Up to 56% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/0fb4a1af-78e2-49e2-8f3f-732ef1ba9acf.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>DV by Dolce Vita</h4>
              <h5>$34.97</h5>
              <span>(Up to 50% off)</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <h2>SHOP BY CATEGORY</h2>
        </div>
        <div className='cat'>
          <div className='d2'>
            <div>
              <img
                src='	https://n.nordstrommedia.com/id/e3c5e72c-fb7f-4b15-a9cb-2979ee1f58ff.jpeg?h=365&w=268'
                alt='#'
              />
            </div>
            <div>
              <h4>Women</h4>
            </div>
          </div>
          <div className='d2'>
            <div>
              <img
                src='https://n.nordstrommedia.com/id/59e0456f-9d43-4659-9541-e629f8a6b217.jpeg?h=365&w=268'
                alt='#'
              />
            </div>
            <div>
              <h4>Men</h4>
            </div>
          </div>
          <div className='d2'>
            <div>
              <img
                src='https://n.nordstrommedia.com/id/e87bc8b2-4de9-415e-a762-abf2597572b0.jpeg?h=365&w=268'
                alt='#'
              />
            </div>
            <div>
              <h4>Kids</h4>
            </div>
          </div>
          <div className='d2'>
            <div>
              <img
                src='https://n.nordstrommedia.com/id/aad0e43a-9790-49e3-aa60-43a61d81ba0e.jpeg?h=365&w=268'
                alt='#'
              />
            </div>
            <div>
              <h4>Home</h4>
            </div>
          </div>
          <div className='d2'>
            <div>
              <img
                src='https://n.nordstrommedia.com/id/466f1c26-aede-4ead-8fd3-3e6164d1e43a.jpeg?h=365&w=268'
                alt='#'
              />
            </div>
            <div>
              <h4>Beauty & Fragrance</h4>
            </div>
          </div>
          <div className='d2'>
            <div>
              <img
                src='https://n.nordstrommedia.com/id/30ddbbf9-fcc5-464f-99dd-ddc637bb6f98.jpeg?h=365&w=268'
                alt='#'
              />
            </div>
            <div>
              <h4>Designer</h4>
            </div>
          </div>
        </div>
        <div>
          <h2>CURRENTLY LOVING</h2>
          <p>
            Explore favorite looks from Instagram. Tag @Nordstrom to show us
            your finds.
          </p>
        </div>
        {/* currently loving */}
        <div className='loving'>
          <div>
            <img
              src='https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjUwNDc3MjM0LjI0MDgwNzUxMDg4NC5qcGVn.jpg?w=640&h=640&fit=cover'
              alt='#'
            />
          </div>
          <div>
            <img
              src='https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5MTc2MTQ4LjEzMjExMDg0MzExNS5qcGVn.jpg?w=640&h=640&fit=cover'
              alt='#'
            />
          </div>
          <div>
            <img
              src='https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjUwNDcyNjY2LjU2NTExODg4NTEwNi5qcGVn.jpg?w=640&h=640&fit=cover'
              alt='#'
            />
          </div>
          <div>
            <img
              src='https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5Njg1MDg4LjgxMjg4NDM4OTU5NC5qcGVn.jpg?w=640&h=640&fit=cover'
              alt='#'
            />
          </div>
        </div>
        {/* trending near you */}
        <div className='great'>
          <h3>Trending near you</h3>
          <p>The most-viewed items by shoppers in your area</p>
        </div>
        <div className='image1'>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/8ef02dbb-ea0d-4797-85c5-2308a8a4ce42.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>BP.</h4>
              <h5>$10.79</h5>
              <span>(Up to 55% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/b8910db5-6273-44e0-b134-e2f145bbb5ee.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Hurley</h4>
              <h5>$11.98</h5>
              <span>(Up to 76% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/ff7e2cf1-2065-4449-8a68-d327a53be3b6.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Leith</h4>
              <h5>$34.97</h5>
              <span>(Up to 37% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/597fdd5e-9d68-4919-a745-e84738e32878.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Nord Strom Rack</h4>
              <h5>$12.97</h5>
              <span>(Up to 22% off)</span>
            </div>
          </div>
          <div className='box'>
            <div className='pimage'>
              <img
                src='https://n.nordstrommedia.com/id/sr3/1f45fd4d-4919-4b11-8a89-f4577d0c3d0b.jpeg?q=45&dpr=2&h=365.31&w=230'
                alt='#'
              />
            </div>
            <div className='product'>
              <h4>Madewell</h4>
              <h5>$15.97</h5>
              <span>(Up to 33% off)</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
