export const routes = {
    login: `${process.env.NEXT_PUBLIC_API_URL}/Login`,
    signup: `${process.env.NEXT_PUBLIC_API_URL}/UserSetup`,

    // University routes
    GetAllUniversity: '/University/GetAllUniversityList',
    GetUniversityById: '/University/GetUniversityBy',
    CreateUniversity: '/University/SaveUniversityData',
    UpdateUniversity: '/University/UpdateUniversityData',
    DeleteUniversity: '/University/DeleteUniversityByUniversityId',

    // Section routes
    GetAllSection: '/Section/GetAllSections',
    GetSectionById: '/Section/GetAllSectionsById',
    CreateSection: '/Section/SaveSectionData',
    UpdateSection: '/Section/UpdateSectionData',
    DeleteSection: '/Section/DeleteSectionData',

    // Course routes
    GetAllCourse: '/Course/GetAllCourse',
    GetCourseById: '/Course/GetCourseByCourseId',
    CreateCourse: '/Course/SaveCourseData',
    UpdateCourse: '/Course/UpdateCourseData',
    DeleteCourse: '/Course/DeleteCourseByCourseId',

  };
  