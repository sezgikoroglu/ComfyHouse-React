import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { useBasket } from "../context/basketcontext";

const Layout = () => {
  
  const { setShowHero } = useBasket();
  const { showHero } = useBasket();
  const [page, setPage] = useState("");
  const { items } = useBasket();
  const { setShow } = useBasket();

  const changePage = (e) => {
    setPage(e.target.innerText);
    setShowHero(false);
  };

  return (
    <>
      <header>
        {showHero && (
          <>
            <nav className="navbar-home">
              <div className="navbar-center">
                <div className="navbar-leftside">
                  <Link to={`/`} onClick={() => setShowHero(true)}>
                    Home
                  </Link>
                  <Link
                    to={`/Products`}
                    onClick={(e) => {
                      setShowHero(false);
                      setPage(e.target.innerText);
                    }}
                  >
                    Products
                  </Link>
                  <Link to={`/about`} onClick={changePage}>
                    About
                  </Link>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="131"
                  height="78"
                  viewBox="0 0 131 78"
                  fill="none"
                >
                  <g filter="url(#filter0_d)">
                    <path
                      d="M9.59244 43.552C9.59244 41.728 9.96044 39.968 10.6964 38.272C11.4644 36.544 12.4564 35.024 13.6724 33.712C14.9204 32.368 16.3284 31.296 17.8964 30.496C19.4964 29.664 21.1444 29.248 22.8404 29.248C24.5044 29.248 25.7844 29.664 26.6804 30.496C27.5764 31.328 28.0244 32.512 28.0244 34.048C28.0244 34.784 27.9124 35.504 27.6884 36.208C27.4964 36.88 27.2244 37.488 26.8724 38.032C26.5524 38.576 26.1684 39.024 25.7204 39.376C25.2724 39.696 24.8244 39.856 24.3764 39.856C23.9924 39.856 23.5924 39.744 23.1764 39.52C22.7924 39.264 22.4724 38.944 22.2164 38.56C24.3604 36.608 25.4324 34.832 25.4324 33.232C25.4324 32.304 25.0644 31.84 24.3284 31.84C23.6884 31.84 22.8884 32.144 21.9284 32.752C20.9684 33.36 20.0404 34.16 19.1444 35.152C17.7684 36.688 16.7124 38.4 15.9764 40.288C15.2724 42.144 14.9204 44.096 14.9204 46.144C14.9204 48.736 15.4964 50.288 16.6484 50.8C17.1284 50.736 17.6884 50.592 18.3284 50.368C18.9684 50.144 19.6564 49.856 20.3924 49.504C21.1284 49.12 21.8804 48.688 22.6484 48.208C23.4484 47.728 24.2164 47.216 24.9524 46.672C25.0804 46.768 25.1924 46.912 25.2884 47.104C25.3844 47.296 25.4324 47.472 25.4324 47.632C24.8884 48.304 24.2644 48.96 23.5604 49.6C22.8564 50.24 22.1204 50.832 21.3524 51.376C20.5844 51.888 19.8324 52.32 19.0964 52.672C18.3924 53.056 17.7684 53.296 17.2244 53.392C16.1684 53.296 15.1764 52.96 14.2484 52.384C13.3204 51.84 12.5044 51.12 11.8004 50.224C11.1284 49.328 10.5844 48.304 10.1684 47.152C9.78444 46 9.59244 44.8 9.59244 43.552ZM35.1247 53.68C33.3007 53.488 31.8447 52.688 30.7567 51.28C29.6687 49.872 29.1247 48.08 29.1247 45.904C29.1247 44.624 29.3167 43.296 29.7007 41.92C30.0847 40.544 30.6287 39.216 31.3327 37.936C32.0367 36.624 32.8687 35.392 33.8287 34.24C34.7887 33.088 35.8287 32.096 36.9487 31.264C38.7087 29.952 40.3567 29.296 41.8927 29.296C42.9167 29.84 43.9247 30.976 44.9167 32.704C45.0767 32.704 45.2207 32.704 45.3487 32.704C45.4767 32.672 45.6207 32.656 45.7807 32.656C47.4767 32.656 48.3247 34.16 48.3247 37.168C48.3247 39.184 47.9887 41.104 47.3167 42.928C46.6767 44.72 45.7647 46.352 44.5807 47.824C43.4287 49.296 42.0367 50.544 40.4047 51.568C38.8047 52.56 37.0447 53.264 35.1247 53.68ZM37.5727 38.56C37.0287 39.296 36.5167 40.096 36.0367 40.96C35.5567 41.824 35.1407 42.704 34.7887 43.6C34.4367 44.464 34.1647 45.312 33.9727 46.144C33.7807 46.944 33.6847 47.664 33.6847 48.304C33.6847 49.072 33.8127 49.808 34.0687 50.512C34.3247 51.216 34.6127 51.616 34.9327 51.712C36.3727 51.392 37.6847 50.8 38.8687 49.936C40.0847 49.04 41.1247 47.936 41.9887 46.624C42.8847 45.312 43.5727 43.824 44.0527 42.16C44.5647 40.496 44.8207 38.72 44.8207 36.832C44.8207 36 44.7727 35.344 44.6767 34.864C44.5807 34.384 44.4207 33.968 44.1967 33.616C42.7887 34.032 41.5247 34.704 40.4047 35.632C39.3167 36.56 38.3727 37.536 37.5727 38.56ZM78.3922 37.264C77.8802 37.296 77.2562 37.632 76.5202 38.272C75.7842 38.88 74.9842 39.68 74.1202 40.672C73.2882 41.632 72.4082 42.704 71.4802 43.888C70.5842 45.072 69.7042 46.256 68.8402 47.44C68.0082 48.592 67.2242 49.68 66.4882 50.704C65.7522 51.728 65.1282 52.544 64.6162 53.152C63.9122 52.864 63.3042 52.448 62.7922 51.904C62.2802 51.328 61.9122 50.624 61.6882 49.792C61.8482 48.8 62.0722 47.776 62.3602 46.72C62.6482 45.632 63.0162 44.512 63.4642 43.36C63.9442 42.208 64.5202 41.008 65.1922 39.76C65.8962 38.48 66.7442 37.136 67.7362 35.728C67.2562 35.76 66.6002 36.112 65.7682 36.784C64.9362 37.424 64.0402 38.272 63.0802 39.328C62.1202 40.352 61.1282 41.52 60.1042 42.832C59.0802 44.112 58.1202 45.376 57.2242 46.624C56.0402 48.288 55.0482 49.744 54.2482 50.992C53.4802 52.24 52.9202 52.976 52.5682 53.2C51.7362 52.592 51.1602 51.936 50.8402 51.232C50.5202 50.528 50.2802 49.744 50.1202 48.88C50.1522 48.112 50.2642 47.152 50.4562 46C50.6802 44.848 50.9842 43.664 51.3682 42.448C52.1042 40.112 53.0482 37.792 54.2002 35.488C55.3842 33.184 56.5202 31.072 57.6082 29.152C58.5042 29.344 59.3042 29.648 60.0082 30.064C60.7442 30.48 61.5122 31.088 62.3122 31.888C61.9922 32.88 61.4962 33.936 60.8242 35.056C60.1522 36.144 59.4482 37.296 58.7122 38.512C57.9762 39.728 57.3042 40.976 56.6962 42.256C56.0882 43.536 55.6882 44.832 55.4962 46.144C56.3922 44.864 57.4482 43.392 58.6642 41.728C59.9122 40.064 61.1762 38.496 62.4562 37.024C63.7682 35.552 65.0642 34.304 66.3442 33.28C67.6242 32.256 68.7762 31.744 69.8002 31.744C70.1842 31.744 70.6002 31.808 71.0482 31.936C71.4962 32.064 71.9122 32.224 72.2962 32.416C72.6802 32.608 73.0002 32.8 73.2562 32.992C73.5122 33.152 73.6562 33.28 73.6882 33.376C73.5282 34.016 73.1442 34.896 72.5362 36.016C71.9602 37.104 71.3362 38.256 70.6642 39.472C69.9922 40.688 69.3682 41.872 68.7922 43.024C68.2162 44.144 67.8802 45.04 67.7842 45.712C69.3522 43.568 70.8242 41.632 72.2002 39.904C73.5762 38.144 74.8722 36.64 76.0882 35.392C77.3042 34.144 78.4242 33.184 79.4482 32.512C80.5042 31.84 81.4962 31.504 82.4242 31.504C83.0642 31.504 83.6562 31.68 84.2002 32.032C84.7762 32.352 85.1762 32.832 85.4002 33.472C85.1122 34.432 84.6322 35.584 83.9602 36.928C83.3202 38.272 82.6642 39.696 81.9922 41.2C81.3202 42.672 80.7122 44.128 80.1682 45.568C79.6562 47.008 79.4002 48.304 79.4002 49.456C79.4002 50.128 79.4962 50.576 79.6882 50.8C79.8802 50.992 80.1522 51.088 80.5042 51.088C80.8882 51.088 81.2402 51.024 81.5602 50.896C81.9122 50.736 82.1682 50.656 82.3282 50.656C82.5202 50.784 82.6322 50.944 82.6642 51.136C82.6962 51.328 82.7122 51.504 82.7122 51.664C82.0722 52.176 81.4162 52.592 80.7442 52.912C80.0722 53.264 79.3202 53.44 78.4882 53.44C77.7202 53.44 77.0802 53.312 76.5682 53.056C76.0882 52.8 75.6882 52.448 75.3682 52C75.0482 51.552 74.8242 51.04 74.6962 50.464C74.5682 49.888 74.5042 49.264 74.5042 48.592C74.5042 47.504 74.6482 46.432 74.9362 45.376C75.2242 44.288 75.5602 43.264 75.9442 42.304C76.3602 41.312 76.7922 40.4 77.2402 39.568C77.6882 38.704 78.0722 37.936 78.3922 37.264ZM89.7569 65.872C88.9569 65.552 88.4769 64.944 88.3169 64.048C88.1889 63.184 87.6449 62.48 86.6849 61.936C86.9409 60.304 87.2289 58.656 87.5489 56.992C87.8689 55.328 88.2689 53.44 88.7489 51.328C89.2609 49.184 89.8849 46.704 90.6209 43.888C91.3889 41.04 92.3489 37.6 93.5009 33.568C92.4449 33.568 91.6129 33.584 91.0049 33.616C90.3969 33.648 89.8049 33.712 89.2289 33.808C89.1009 33.68 88.9889 33.504 88.8929 33.28C88.8289 33.056 88.7969 32.848 88.7969 32.656C89.1169 32.528 89.7729 32.368 90.7649 32.176C91.7569 31.952 92.8449 31.76 94.0289 31.6C94.7969 29.168 95.6769 26.992 96.6689 25.072C97.6609 23.12 98.7329 21.456 99.8849 20.08C101.037 18.704 102.253 17.648 103.533 16.912C104.813 16.176 106.109 15.808 107.421 15.808C107.805 15.808 108.173 15.84 108.525 15.904C108.877 15.936 109.149 15.952 109.341 15.952C109.629 15.728 110.013 15.536 110.493 15.376C110.973 15.184 111.389 15.088 111.741 15.088C112.125 15.088 112.621 15.296 113.229 15.712C112.973 16.16 112.701 16.768 112.413 17.536C112.125 18.304 111.885 19.056 111.693 19.792C110.893 22.16 110.045 23.696 109.149 24.4C108.797 24.4 108.605 23.936 108.573 23.008C108.541 22.336 108.445 21.68 108.285 21.04C108.157 20.752 108.061 20.496 107.997 20.272C107.965 20.048 107.949 19.76 107.949 19.408C107.949 19.216 107.965 18.992 107.997 18.736C108.029 18.448 108.093 17.984 108.189 17.344C107.645 17.344 107.037 17.68 106.365 18.352C105.725 19.024 105.037 19.984 104.301 21.232C103.597 22.448 102.877 23.904 102.141 25.6C101.405 27.296 100.701 29.168 100.029 31.216L104.061 31.072C104.221 31.232 104.349 31.6 104.445 32.176C104.573 32.72 104.653 33.296 104.685 33.904L99.4049 33.616C98.1889 37.232 97.0529 40.688 95.9969 43.984C94.9409 47.28 93.9969 50.32 93.1649 53.104C92.3329 55.888 91.6129 58.368 91.0049 60.544C90.4289 62.752 90.0129 64.528 89.7569 65.872ZM121.571 44.56C120.835 46.896 120.099 49.024 119.363 50.944C118.627 52.864 117.843 54.624 117.011 56.224C116.179 57.856 115.283 59.344 114.323 60.688C113.363 62.064 112.307 63.36 111.155 64.576C109.683 66.112 108.163 67.28 106.595 68.08C105.027 68.912 103.459 69.328 101.891 69.328C101.091 69.328 100.291 69.232 99.4912 69.04C98.7232 68.88 98.0032 68.64 97.3312 68.32C96.6272 68.032 96.0192 67.68 95.5072 67.264C94.9632 66.88 94.5792 66.464 94.3552 66.016C94.3552 65.632 94.5792 65.296 95.0272 65.008C95.4112 65.36 95.7312 65.632 95.9872 65.824C96.2432 66.016 96.4992 66.176 96.7552 66.304C96.9792 66.432 97.2352 66.512 97.5232 66.544C97.7792 66.576 98.0832 66.592 98.4352 66.592C100.259 66.592 102.035 66.048 103.763 64.96C105.523 63.904 107.171 62.384 108.707 60.4C110.275 58.448 111.699 56.064 112.979 53.248C114.259 50.464 115.347 47.344 116.243 43.888C115.827 44.528 115.315 45.312 114.707 46.24C114.099 47.168 113.427 48.096 112.691 49.024C111.955 49.92 111.187 50.736 110.387 51.472C109.619 52.208 108.867 52.704 108.131 52.96C107.619 52.928 107.075 52.816 106.499 52.624C105.955 52.464 105.427 52.224 104.915 51.904C104.435 51.584 104.003 51.2 103.619 50.752C103.235 50.304 102.979 49.792 102.851 49.216C102.851 48.288 102.883 47.552 102.947 47.008C103.011 46.432 103.123 45.808 103.283 45.136C103.571 43.92 103.987 42.544 104.531 41.008C105.107 39.472 105.763 37.968 106.499 36.496C107.267 34.992 108.099 33.6 108.995 32.32C109.923 31.008 110.883 29.984 111.875 29.248C112.131 29.248 112.451 29.28 112.835 29.344C113.219 29.376 113.619 29.456 114.035 29.584C114.451 29.712 114.851 29.872 115.235 30.064C115.619 30.224 115.955 30.448 116.243 30.736C115.891 31.056 115.123 32.128 113.939 33.952C112.755 35.776 111.443 38.4 110.003 41.824C109.843 42.176 109.651 42.688 109.427 43.36C109.203 44.032 108.979 44.736 108.755 45.472C108.563 46.208 108.387 46.928 108.227 47.632C108.067 48.336 107.987 48.896 107.987 49.312C107.987 49.568 108.019 49.76 108.083 49.888C108.179 50.016 108.259 50.112 108.323 50.176C108.899 50.08 109.667 49.616 110.627 48.784C111.587 47.92 112.675 46.592 113.891 44.8C114.659 43.648 115.363 42.512 116.003 41.392C116.643 40.24 117.267 39.088 117.875 37.936C118.515 36.784 119.171 35.6 119.843 34.384C120.515 33.168 121.235 31.92 122.003 30.64C122.419 30.64 122.867 30.688 123.347 30.784C123.827 30.88 124.291 31.008 124.739 31.168C125.187 31.296 125.571 31.456 125.891 31.648C126.243 31.808 126.499 31.984 126.659 32.176C125.667 34.288 124.739 36.352 123.875 38.368C123.011 40.384 122.243 42.448 121.571 44.56Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="5.59244"
                      y="15.088"
                      width="125.067"
                      height="62.24"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="basket-counter">{items.length}</div>

                <Link to={`/basket`} onClick={() => setShow(true)}>
                  <img
                    className="basket"
                    src="images/PngItem_1771991.png"
                    alt=""
                  />
                </Link>
              </div>
            </nav>
            <div className="hero">
              <div className="hero-container">
                <h1 className="text-slanted">rest, relax, unwind</h1>
                <h3>Embrace your choices - we do</h3>
                <Link
                  to={`/Products`}
                  onClick={(e) => {
                    setShowHero(false);
                    setPage("Products");
                  }}
                  className="hero-btn"
                >
                  show now
                </Link>
              </div>
            </div>
          </>
        )}

        {!showHero && (
          <>
            <nav className="navbar">
              <div className="navbar-center">
                <div className="navbar-leftside">
                  <Link to={`/`} onClick={() => setShowHero(true)}>
                    Home
                  </Link>
                  <Link
                    to={`/Products`}
                    onClick={(e) => {
                      setShowHero(false);
                      setPage(e.target.innerText);
                    }}
                  >
                    Products
                  </Link>
                  <Link to={`/about`} onClick={changePage}>
                    About
                  </Link>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="131"
                  height="78"
                  viewBox="0 0 131 78"
                  fill="none"
                >
                  <g filter="url(#filter0_d)">
                    <path
                      d="M9.59244 43.552C9.59244 41.728 9.96044 39.968 10.6964 38.272C11.4644 36.544 12.4564 35.024 13.6724 33.712C14.9204 32.368 16.3284 31.296 17.8964 30.496C19.4964 29.664 21.1444 29.248 22.8404 29.248C24.5044 29.248 25.7844 29.664 26.6804 30.496C27.5764 31.328 28.0244 32.512 28.0244 34.048C28.0244 34.784 27.9124 35.504 27.6884 36.208C27.4964 36.88 27.2244 37.488 26.8724 38.032C26.5524 38.576 26.1684 39.024 25.7204 39.376C25.2724 39.696 24.8244 39.856 24.3764 39.856C23.9924 39.856 23.5924 39.744 23.1764 39.52C22.7924 39.264 22.4724 38.944 22.2164 38.56C24.3604 36.608 25.4324 34.832 25.4324 33.232C25.4324 32.304 25.0644 31.84 24.3284 31.84C23.6884 31.84 22.8884 32.144 21.9284 32.752C20.9684 33.36 20.0404 34.16 19.1444 35.152C17.7684 36.688 16.7124 38.4 15.9764 40.288C15.2724 42.144 14.9204 44.096 14.9204 46.144C14.9204 48.736 15.4964 50.288 16.6484 50.8C17.1284 50.736 17.6884 50.592 18.3284 50.368C18.9684 50.144 19.6564 49.856 20.3924 49.504C21.1284 49.12 21.8804 48.688 22.6484 48.208C23.4484 47.728 24.2164 47.216 24.9524 46.672C25.0804 46.768 25.1924 46.912 25.2884 47.104C25.3844 47.296 25.4324 47.472 25.4324 47.632C24.8884 48.304 24.2644 48.96 23.5604 49.6C22.8564 50.24 22.1204 50.832 21.3524 51.376C20.5844 51.888 19.8324 52.32 19.0964 52.672C18.3924 53.056 17.7684 53.296 17.2244 53.392C16.1684 53.296 15.1764 52.96 14.2484 52.384C13.3204 51.84 12.5044 51.12 11.8004 50.224C11.1284 49.328 10.5844 48.304 10.1684 47.152C9.78444 46 9.59244 44.8 9.59244 43.552ZM35.1247 53.68C33.3007 53.488 31.8447 52.688 30.7567 51.28C29.6687 49.872 29.1247 48.08 29.1247 45.904C29.1247 44.624 29.3167 43.296 29.7007 41.92C30.0847 40.544 30.6287 39.216 31.3327 37.936C32.0367 36.624 32.8687 35.392 33.8287 34.24C34.7887 33.088 35.8287 32.096 36.9487 31.264C38.7087 29.952 40.3567 29.296 41.8927 29.296C42.9167 29.84 43.9247 30.976 44.9167 32.704C45.0767 32.704 45.2207 32.704 45.3487 32.704C45.4767 32.672 45.6207 32.656 45.7807 32.656C47.4767 32.656 48.3247 34.16 48.3247 37.168C48.3247 39.184 47.9887 41.104 47.3167 42.928C46.6767 44.72 45.7647 46.352 44.5807 47.824C43.4287 49.296 42.0367 50.544 40.4047 51.568C38.8047 52.56 37.0447 53.264 35.1247 53.68ZM37.5727 38.56C37.0287 39.296 36.5167 40.096 36.0367 40.96C35.5567 41.824 35.1407 42.704 34.7887 43.6C34.4367 44.464 34.1647 45.312 33.9727 46.144C33.7807 46.944 33.6847 47.664 33.6847 48.304C33.6847 49.072 33.8127 49.808 34.0687 50.512C34.3247 51.216 34.6127 51.616 34.9327 51.712C36.3727 51.392 37.6847 50.8 38.8687 49.936C40.0847 49.04 41.1247 47.936 41.9887 46.624C42.8847 45.312 43.5727 43.824 44.0527 42.16C44.5647 40.496 44.8207 38.72 44.8207 36.832C44.8207 36 44.7727 35.344 44.6767 34.864C44.5807 34.384 44.4207 33.968 44.1967 33.616C42.7887 34.032 41.5247 34.704 40.4047 35.632C39.3167 36.56 38.3727 37.536 37.5727 38.56ZM78.3922 37.264C77.8802 37.296 77.2562 37.632 76.5202 38.272C75.7842 38.88 74.9842 39.68 74.1202 40.672C73.2882 41.632 72.4082 42.704 71.4802 43.888C70.5842 45.072 69.7042 46.256 68.8402 47.44C68.0082 48.592 67.2242 49.68 66.4882 50.704C65.7522 51.728 65.1282 52.544 64.6162 53.152C63.9122 52.864 63.3042 52.448 62.7922 51.904C62.2802 51.328 61.9122 50.624 61.6882 49.792C61.8482 48.8 62.0722 47.776 62.3602 46.72C62.6482 45.632 63.0162 44.512 63.4642 43.36C63.9442 42.208 64.5202 41.008 65.1922 39.76C65.8962 38.48 66.7442 37.136 67.7362 35.728C67.2562 35.76 66.6002 36.112 65.7682 36.784C64.9362 37.424 64.0402 38.272 63.0802 39.328C62.1202 40.352 61.1282 41.52 60.1042 42.832C59.0802 44.112 58.1202 45.376 57.2242 46.624C56.0402 48.288 55.0482 49.744 54.2482 50.992C53.4802 52.24 52.9202 52.976 52.5682 53.2C51.7362 52.592 51.1602 51.936 50.8402 51.232C50.5202 50.528 50.2802 49.744 50.1202 48.88C50.1522 48.112 50.2642 47.152 50.4562 46C50.6802 44.848 50.9842 43.664 51.3682 42.448C52.1042 40.112 53.0482 37.792 54.2002 35.488C55.3842 33.184 56.5202 31.072 57.6082 29.152C58.5042 29.344 59.3042 29.648 60.0082 30.064C60.7442 30.48 61.5122 31.088 62.3122 31.888C61.9922 32.88 61.4962 33.936 60.8242 35.056C60.1522 36.144 59.4482 37.296 58.7122 38.512C57.9762 39.728 57.3042 40.976 56.6962 42.256C56.0882 43.536 55.6882 44.832 55.4962 46.144C56.3922 44.864 57.4482 43.392 58.6642 41.728C59.9122 40.064 61.1762 38.496 62.4562 37.024C63.7682 35.552 65.0642 34.304 66.3442 33.28C67.6242 32.256 68.7762 31.744 69.8002 31.744C70.1842 31.744 70.6002 31.808 71.0482 31.936C71.4962 32.064 71.9122 32.224 72.2962 32.416C72.6802 32.608 73.0002 32.8 73.2562 32.992C73.5122 33.152 73.6562 33.28 73.6882 33.376C73.5282 34.016 73.1442 34.896 72.5362 36.016C71.9602 37.104 71.3362 38.256 70.6642 39.472C69.9922 40.688 69.3682 41.872 68.7922 43.024C68.2162 44.144 67.8802 45.04 67.7842 45.712C69.3522 43.568 70.8242 41.632 72.2002 39.904C73.5762 38.144 74.8722 36.64 76.0882 35.392C77.3042 34.144 78.4242 33.184 79.4482 32.512C80.5042 31.84 81.4962 31.504 82.4242 31.504C83.0642 31.504 83.6562 31.68 84.2002 32.032C84.7762 32.352 85.1762 32.832 85.4002 33.472C85.1122 34.432 84.6322 35.584 83.9602 36.928C83.3202 38.272 82.6642 39.696 81.9922 41.2C81.3202 42.672 80.7122 44.128 80.1682 45.568C79.6562 47.008 79.4002 48.304 79.4002 49.456C79.4002 50.128 79.4962 50.576 79.6882 50.8C79.8802 50.992 80.1522 51.088 80.5042 51.088C80.8882 51.088 81.2402 51.024 81.5602 50.896C81.9122 50.736 82.1682 50.656 82.3282 50.656C82.5202 50.784 82.6322 50.944 82.6642 51.136C82.6962 51.328 82.7122 51.504 82.7122 51.664C82.0722 52.176 81.4162 52.592 80.7442 52.912C80.0722 53.264 79.3202 53.44 78.4882 53.44C77.7202 53.44 77.0802 53.312 76.5682 53.056C76.0882 52.8 75.6882 52.448 75.3682 52C75.0482 51.552 74.8242 51.04 74.6962 50.464C74.5682 49.888 74.5042 49.264 74.5042 48.592C74.5042 47.504 74.6482 46.432 74.9362 45.376C75.2242 44.288 75.5602 43.264 75.9442 42.304C76.3602 41.312 76.7922 40.4 77.2402 39.568C77.6882 38.704 78.0722 37.936 78.3922 37.264ZM89.7569 65.872C88.9569 65.552 88.4769 64.944 88.3169 64.048C88.1889 63.184 87.6449 62.48 86.6849 61.936C86.9409 60.304 87.2289 58.656 87.5489 56.992C87.8689 55.328 88.2689 53.44 88.7489 51.328C89.2609 49.184 89.8849 46.704 90.6209 43.888C91.3889 41.04 92.3489 37.6 93.5009 33.568C92.4449 33.568 91.6129 33.584 91.0049 33.616C90.3969 33.648 89.8049 33.712 89.2289 33.808C89.1009 33.68 88.9889 33.504 88.8929 33.28C88.8289 33.056 88.7969 32.848 88.7969 32.656C89.1169 32.528 89.7729 32.368 90.7649 32.176C91.7569 31.952 92.8449 31.76 94.0289 31.6C94.7969 29.168 95.6769 26.992 96.6689 25.072C97.6609 23.12 98.7329 21.456 99.8849 20.08C101.037 18.704 102.253 17.648 103.533 16.912C104.813 16.176 106.109 15.808 107.421 15.808C107.805 15.808 108.173 15.84 108.525 15.904C108.877 15.936 109.149 15.952 109.341 15.952C109.629 15.728 110.013 15.536 110.493 15.376C110.973 15.184 111.389 15.088 111.741 15.088C112.125 15.088 112.621 15.296 113.229 15.712C112.973 16.16 112.701 16.768 112.413 17.536C112.125 18.304 111.885 19.056 111.693 19.792C110.893 22.16 110.045 23.696 109.149 24.4C108.797 24.4 108.605 23.936 108.573 23.008C108.541 22.336 108.445 21.68 108.285 21.04C108.157 20.752 108.061 20.496 107.997 20.272C107.965 20.048 107.949 19.76 107.949 19.408C107.949 19.216 107.965 18.992 107.997 18.736C108.029 18.448 108.093 17.984 108.189 17.344C107.645 17.344 107.037 17.68 106.365 18.352C105.725 19.024 105.037 19.984 104.301 21.232C103.597 22.448 102.877 23.904 102.141 25.6C101.405 27.296 100.701 29.168 100.029 31.216L104.061 31.072C104.221 31.232 104.349 31.6 104.445 32.176C104.573 32.72 104.653 33.296 104.685 33.904L99.4049 33.616C98.1889 37.232 97.0529 40.688 95.9969 43.984C94.9409 47.28 93.9969 50.32 93.1649 53.104C92.3329 55.888 91.6129 58.368 91.0049 60.544C90.4289 62.752 90.0129 64.528 89.7569 65.872ZM121.571 44.56C120.835 46.896 120.099 49.024 119.363 50.944C118.627 52.864 117.843 54.624 117.011 56.224C116.179 57.856 115.283 59.344 114.323 60.688C113.363 62.064 112.307 63.36 111.155 64.576C109.683 66.112 108.163 67.28 106.595 68.08C105.027 68.912 103.459 69.328 101.891 69.328C101.091 69.328 100.291 69.232 99.4912 69.04C98.7232 68.88 98.0032 68.64 97.3312 68.32C96.6272 68.032 96.0192 67.68 95.5072 67.264C94.9632 66.88 94.5792 66.464 94.3552 66.016C94.3552 65.632 94.5792 65.296 95.0272 65.008C95.4112 65.36 95.7312 65.632 95.9872 65.824C96.2432 66.016 96.4992 66.176 96.7552 66.304C96.9792 66.432 97.2352 66.512 97.5232 66.544C97.7792 66.576 98.0832 66.592 98.4352 66.592C100.259 66.592 102.035 66.048 103.763 64.96C105.523 63.904 107.171 62.384 108.707 60.4C110.275 58.448 111.699 56.064 112.979 53.248C114.259 50.464 115.347 47.344 116.243 43.888C115.827 44.528 115.315 45.312 114.707 46.24C114.099 47.168 113.427 48.096 112.691 49.024C111.955 49.92 111.187 50.736 110.387 51.472C109.619 52.208 108.867 52.704 108.131 52.96C107.619 52.928 107.075 52.816 106.499 52.624C105.955 52.464 105.427 52.224 104.915 51.904C104.435 51.584 104.003 51.2 103.619 50.752C103.235 50.304 102.979 49.792 102.851 49.216C102.851 48.288 102.883 47.552 102.947 47.008C103.011 46.432 103.123 45.808 103.283 45.136C103.571 43.92 103.987 42.544 104.531 41.008C105.107 39.472 105.763 37.968 106.499 36.496C107.267 34.992 108.099 33.6 108.995 32.32C109.923 31.008 110.883 29.984 111.875 29.248C112.131 29.248 112.451 29.28 112.835 29.344C113.219 29.376 113.619 29.456 114.035 29.584C114.451 29.712 114.851 29.872 115.235 30.064C115.619 30.224 115.955 30.448 116.243 30.736C115.891 31.056 115.123 32.128 113.939 33.952C112.755 35.776 111.443 38.4 110.003 41.824C109.843 42.176 109.651 42.688 109.427 43.36C109.203 44.032 108.979 44.736 108.755 45.472C108.563 46.208 108.387 46.928 108.227 47.632C108.067 48.336 107.987 48.896 107.987 49.312C107.987 49.568 108.019 49.76 108.083 49.888C108.179 50.016 108.259 50.112 108.323 50.176C108.899 50.08 109.667 49.616 110.627 48.784C111.587 47.92 112.675 46.592 113.891 44.8C114.659 43.648 115.363 42.512 116.003 41.392C116.643 40.24 117.267 39.088 117.875 37.936C118.515 36.784 119.171 35.6 119.843 34.384C120.515 33.168 121.235 31.92 122.003 30.64C122.419 30.64 122.867 30.688 123.347 30.784C123.827 30.88 124.291 31.008 124.739 31.168C125.187 31.296 125.571 31.456 125.891 31.648C126.243 31.808 126.499 31.984 126.659 32.176C125.667 34.288 124.739 36.352 123.875 38.368C123.011 40.384 122.243 42.448 121.571 44.56Z"
                      fill="#102A42"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="5.59244"
                      y="15.088"
                      width="125.067"
                      height="62.24"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilter="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="basket-counter">{items.length}</div>

                <Link to={`/basket`} onClick={() => setShow(true)}>
                  <img
                    className="basket"
                    src="images/PngItem_1771991.png"
                    alt=""
                  />
                </Link>
              </div>
            </nav>

            <div className="page-hero">
              <h3>Home/{page}</h3>
            </div>
          </>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

// <li>
//       {/* <a href="/contact">Contact</a> */}
//         <Link to="/users">Users</Link>
// </li>