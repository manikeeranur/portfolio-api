import axios from "axios";
// Define API URLs
const API1 = "https://portfolio-api-0yk5.onrender.com/api/education";
const API2 = "https://portfolio-api-0yk5.onrender.com/api/experience";
const API3 = "https://portfolio-api-0yk5.onrender.com/api/technicalSkills";
const API4 = "https://portfolio-api-0yk5.onrender.com/api/personalDetails";
const API5 = "https://portfolio-api-0yk5.onrender.com/api/skills";

// Fetch Data from Individual APIs
async function fetchApiData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return null; // Return null for failed API calls
  }
}

// Merge Data from All APIs
async function getFullDetails() {
  try {
    const [education, experience, technicalSkills, personalDetails, skills] =
      await Promise.all([
        fetchApiData(API1),
        fetchApiData(API2),
        fetchApiData(API3),
        fetchApiData(API4),
        fetchApiData(API5),
      ]);

    return {
      education: education || [], // Default to empty array if API fails
      experience: experience || [],
      technicalSkills: technicalSkills || [],
      personalDetails: personalDetails || [],
      skills: skills || [],
    };
  } catch (error) {
    console.error("Error merging data:", error.message);
    throw error;
  }
}

export default getFullDetails;
