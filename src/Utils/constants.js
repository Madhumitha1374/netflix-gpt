export const NETFLIX_BG = 'https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg'
export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' +  process.env.REACT_APP_TMDB_KEY, 
    }
  };
export const MOVIE_POSTER = "https://image.tmdb.org/t/p/w500/"

//keerthi
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY
