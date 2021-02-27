console.log("hello world");

$(document).ready(function () {
  $("#cancelButton").on("click", function () {
    window.history.back();
  });

  let educationCounter = 0;
  let experienceCounter = 0;
  let projectCounter = 0;
  $("#addEducation").on("click", function () {
    educationCounter++;
    const $clone = $(".education").first().clone();
    let index = parseInt($(".education").attr("data-index")) + educationCounter;
    index = index.toString();
    let letter = String.fromCharCode(65 + educationCounter);
    //update school id
    console.log($clone);
    $clone
      .find(".school")
      .attr("id", "school" + letter)
      .val("")
      .end();
    //update degree id
    $clone
      .find(".degree")
      .attr("id", "degree" + letter)
      .val("")
      .end();
    //update startdate id
    $clone
      .find(".startDate")
      .attr("id", "startDate" + letter)
      .val("")
      .end();
    //update enddate id
    $clone
      .find(".endDate")
      .attr("id", "endDate" + letter)
      .val("")
      .end();
    //update program id
    $clone
      .find(".program")
      .attr("id", "program" + letter)
      .val("")
      .end();

    $clone.attr("data-index", index);
    $(".formContainer").append($clone);
    $($clone).insertBefore("#addEducation");
    localStorage.setItem("educationCounter", JSON.stringify(educationCounter));
  });
  $("#addExperience").on("click", function () {
    experienceCounter++;
    const $clone = $(".experience").first().clone();
    let index =
      parseInt($(".experience").attr("data-index")) + experienceCounter;
    index = index.toString();
    let letter = String.fromCharCode(65 + experienceCounter);
    //update employer id
    let newEmployer = "employer" + letter;
    $clone.find(".employer").attr("id", newEmployer).val("").end();
    // $clone.find('#employer').css("background-color", "red");
    //update title id
    $clone
      .find(".jobTitle")
      .attr("id", "title" + letter)
      .val("")
      .end();
    //update start id
    $clone
      .find(".jobStart")
      .attr("id", "jobStart" + letter)
      .val("")
      .end();
    //update end id
    $clone
      .find(".jobEnd")
      .attr("id", "jobEnd" + letter)
      .val("")
      .end();
    //update description
    $clone
      .find(".description")
      .attr("id", "description" + letter)
      .val("")
      .end();

    $clone.attr("data-index", index);
    $(".formContainer").append($clone);
    $($clone).insertBefore("#addExperience");
    localStorage.setItem(
      "experienceCounter",
      JSON.stringify(experienceCounter)
    );
  });
  $("#addProject").on("click", function () {
    projectCounter++;
    const $clone = $(".project").first().clone();

    let index = parseInt($(".project").attr("data-index")) + projectCounter;
    index = index.toString();
    let letter = String.fromCharCode(65 + projectCounter);
    //update project id
    $clone
      .find(".project")
      .attr("id", "project" + letter)
      .val("")
      .end();
    //update summary id
    $clone
      .find(".summary")
      .attr("id", "summary" + letter)
      .val("")
      .end();

    $clone.attr("data-index", index);
    $(".formContainer").append($clone);
    $($clone).insertBefore("#addProject");
    localStorage.setItem("projectCounter", JSON.stringify(projectCounter));
  });

  $("#saveButton").on("click", function () {
    const educationCounter = JSON.parse(
      localStorage.getItem("educationCounter")
    );
    const experienceCounter = JSON.parse(
      localStorage.getItem("experienceCounter")
    );
    const projectCounter = JSON.parse(localStorage.getItem("projectCounter"));

    const resumeFileName = $("#resumeName").val().trim();
    const name = $(".name").val();
    const email = $(".email").val();
    const phoneNumber = $(".phoneNumber").val();
    const objectiveStatement = $("#objective").val();
    const skills = $("#skills").val();
    const awards = $("#awards").val();
    if (resumeName == "") {
      alert("Please enter a valid file name for your resume");
    }

    const school = $(".school").val();
    const degree = $(".degree").val();
    const startDate = $(".startDate").val();
    const endDate = $(".endDate").val();
    const program = $(".program").val();
    const isSchool =
      $(".school").val() === "" || $(".school").val() === undefined
        ? false
        : true;

    const schoolB = $("#schoolB").val();
    const degreeB = $("#degreeB").val();
    const startDateB = $("#startDateB").val();
    const endDateB = $("#endDateB").val();
    const programB = $("#programB").val();
    const isSchoolB =
      $("#schoolB").val() === "" || $("#schoolB").val() === undefined
        ? false
        : true;

    const schoolC = $("#schoolC").val();
    const degreeC = $("#degreeC").val();
    const startDateC = $("#startDateC").val();
    const endDateC = $("#endDateC").val();
    const programC = $("#programC").val();
    const isSchoolC =
      $("#schoolC").val() === "" || $("#schoolC").val() === undefined
        ? false
        : true;

    const employer = $(".employer").val();
    const title = $(".jobTitle").val();
    const jobStart = $(".jobStart").val();
    const jobEnd = $(".jobEnd").val();
    const description = $(".description").val();
    const isEmployer =
      $(".employer").val() === "" || $(".employer").val() === undefined
        ? false
        : true;

    const employerB = $("#employerB").val();
    const titleB = $("#titleB").val();
    const jobStartB = $("#jobStartB").val();
    const jobEndB = $("#jobEndB").val();
    const descriptionB = $("#descriptionB").val();
    const isEmployerB =
      $("#employerB").val() === "" || $("#employerB").val() === undefined
        ? false
        : true;

    const employerC = $("#employerC").val();
    const titleC = $("#titleC").val();
    const jobStartC = $("#jobStartC").val();
    const jobEndC = $("#jobEndC").val();
    const descriptionC = $("#descriptionC").val();
    const isEmployerC =
      $("#employerC").val() === "" || $("#employerC").val() === undefined
        ? false
        : true;

    const project = $("#project").val();
    const summary = $(".summary").val();
    const isProject =
      $("#project").val() === "" || $("#project").val() === undefined
        ? false
        : true;

    const projectB = $("#projectB").val();
    const summaryB = $("#summaryB").val();
    const isProjectB =
      $("#projectB").val() === "" || $("#projectB").val() === undefined
        ? false
        : true;

    const projectC = $("#projectC").val();
    const summaryC = $("#summaryC").val();
    const isProjectC =
      $("#projectC").val() === "" || $("#projectC").val() === undefined
        ? false
        : true;

    const userId = JSON.parse(sessionStorage.getItem("userId"));

    const resume = {
      userId: userId,
      resumeName: resumeFileName,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      objective: objectiveStatement,

      school: school,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
      program: program,
      isSchool: isSchool,
      schoolB: schoolB,
      degreeB: degreeB,
      startDateB: startDateB,
      endDateB: endDateB,
      programB: programB,
      isSchoolB: isSchoolB,
      schoolC: schoolC,
      degreeC: degreeC,
      startDateC: startDateC,
      endDateC: endDateC,
      programC: programC,
      isSchoolC: isSchoolC,

      employer: employer,
      title: title,
      jobStart: jobStart,
      jobEnd: jobEnd,
      description: description,
      isEmployer: isEmployer,
      employerB: employerB,
      titleB: titleB,
      jobStartB: jobStartB,
      jobEndB: jobEndB,
      descriptionB: descriptionB,
      isEmployerB: isEmployerB,
      employerC: employerC,
      titleC: titleC,
      jobStartC: jobStartC,
      jobEndC: jobEndC,
      descriptionC: descriptionC,
      isEmployerC: isEmployerC,

      project: project,
      summary: summary,
      isProject: isProject,
      projectB: projectB,
      summaryB: summaryB,
      isProjectB: isProjectB,
      projectC: projectC,
      summaryC: summaryC,
      isProjectC: isProjectC,

      skills: skills,
      awards: awards,
    };
    console.log(resume);
    $.ajax({
      method: "POST",
      url: "/api/newResume",
      data: resume,
    }).then(function (res) {
      console.log("posted resume");
      res.send(res);
      // window.location.replace('/index');
    });
    window.location.replace("/index");
  });
});
