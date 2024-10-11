import { Link } from "react-router-dom"

interface buttonProps { 
  backColor: String;
  content?: String;
}

function Button({backColor, content}:buttonProps) {
  return (
    <div>
       <Link to='/apply' > 
          <button className={`px-2 py-1 xl:px-8 xl:py-4 bg-${backColor!=="dark-pink" ? "gray-900" : backColor} mt-8 text-[3vw] xl:text-[1.5vw] xl:mt-12 gap-2 xl:gap-4 font-semibold rounded-lg text-white-wheat flex items-center justify-center`}>{content ?? "Apply Now"}
              <svg width="20" height="20" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.0607 12.5607C39.6464 11.9749 39.6464 11.0251 39.0607 10.4393L29.5147 0.893398C28.9289 0.307611 27.9792 0.307611 27.3934 0.893398C26.8076 1.47919 26.8076 2.42893 27.3934 3.01472L35.8787 11.5L27.3934 19.9853C26.8076 20.5711 26.8076 21.5208 27.3934 22.1066C27.9792 22.6924 28.9289 22.6924 29.5147 22.1066L39.0607 12.5607ZM0 13H38V10H0V13Z" fill="#FFFDFD"/>
              </svg>
          </button> 
        </Link>             
    </div>
  )
}

export default Button