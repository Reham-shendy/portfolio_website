const branches = [
  { branchName: "ITI - Smart village" },
  { branchName: "ITI - Tanta" },
  { branchName: "ITI - Mansoura" },
  { branchName: "ITI - Aswan" },
  { branchName: "ITI - Alex" },
  { branchName: "ITI - Cairo" },
  { branchName: "ITI - Tanta" },
  { branchName: "ITI - Mansoura" },
];

function generateBranches({ branchName }) {
  return `
  <li>${branchName}</li>
  `;
}
const branchesPart = document.querySelector(".branches-part");

branchesPart.innerHTML(
  branches
    .Map((branch) => {
      return generateBranches(branch);
    })
    .join(""),
);
