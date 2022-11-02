import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Check Everything is rendering", () => {
  test("renders app with heading", () => {
    render(<App />);

    const heading = screen.getByText(
      /Obtaining Transporter Qualification Service/i
    );
    expect(heading).toBeInTheDocument();
  });

  test("renders app with bread crumbs", () => {
    render(<App />);
    const services = screen.getByText("Services");
    const transporterServices = screen.getByText(/Transporter services/i);
    expect(services).toBeInTheDocument();
    expect(transporterServices).toBeInTheDocument();
  });

  test("renders app with rating button", () => {
    render(<App />);

    const ratingButton = screen.getByText(/Rate service/i);
    expect(ratingButton).toBeInTheDocument();
  });

  test("renders app with categorization text", () => {
    render(<App />);

    const categorizationHeading = screen.getByText(/Categorization/i);
    expect(categorizationHeading).toBeInTheDocument();
  });

  test("renders app with Company information text", () => {
    render(<App />);

    const CompanyInformation = screen.getByText("Company information");
    expect(CompanyInformation).toBeInTheDocument();
  });

  test("renders app with Truck information text", () => {
    render(<App />);

    const TruckInformation = screen.getByText("Truck information");
    expect(TruckInformation).toBeInTheDocument();
  });

  test("renders app with Container information text", () => {
    render(<App />);

    const ContainerInformation = screen.getByText("Container information");
    expect(ContainerInformation).toBeInTheDocument();
  });

  test("renders app with Labor information text", () => {
    render(<App />);

    const LaborInformation = screen.getByText("Labor information");
    expect(LaborInformation).toBeInTheDocument();
  });

  test("renders app with Location information text", () => {
    render(<App />);

    const LocationInformation = screen.getByText("Location information");
    expect(LocationInformation).toBeInTheDocument();
  });

  test("renders app with Required documents text", () => {
    render(<App />);

    const RequiredDocuments = screen.getByText("Required documents");
    expect(RequiredDocuments).toBeInTheDocument();
  });

  test("renders app with Declarations and Commitments text", () => {
    render(<App />);

    const DeclarationsAndCommitments = screen.getByText(
      "Declarations and Commitments"
    );
    expect(DeclarationsAndCommitments).toBeInTheDocument();
  });

  test("renders app with RadioBoxes of first step", () => {
    render(<App />);

    const DiggingContractor = screen.getByText("Digging Contractor");
    const PrivateTransporter = screen.getByText("Private Transporter");
    const ConstructionAndCommercialCompany = screen.getByText(
      "Construction and commercial waste transportation company"
    );

    expect(DiggingContractor).toBeInTheDocument();
    expect(PrivateTransporter).toBeInTheDocument();
    expect(ConstructionAndCommercialCompany).toBeInTheDocument();
  });

  test("renders app with CheckBoxes of first step", () => {
    render(<App />);

    const CommercialActivities = screen.getByText("Commercial Activities");
    const ConstructionWaste = screen.getByText("Construction Waste");
    const SpecialMedicalWaste = screen.getByText("Special Medical waste");
    const TreatedMedicalWaste = screen.getByText("Treated medical waste");
    const SewageWater = screen.getByText("Sewage Water");

    expect(CommercialActivities).toBeInTheDocument();
    expect(ConstructionWaste).toBeInTheDocument();
    expect(SpecialMedicalWaste).toBeInTheDocument();
    expect(TreatedMedicalWaste).toBeInTheDocument();
    expect(SewageWater).toBeInTheDocument();
  });

  test("renders app with Instruction of second step", () => {
    render(<App />);
    const pleaseEnterInstruction = screen.getByText(
      "Please Enter your company information"
    );
    expect(pleaseEnterInstruction).toBeInTheDocument();
  });

  test("renders app with all labels of second step", () => {
    render(<App />);
    const crNumber = screen.getByText("CR number *");
    const companyName = screen.getByText("Company name");
    const managerName = screen.getByText("Manager name");
    const partnerName = screen.getByText("Partner name");
    const cRIssueDate = screen.getByText("CR Issue date");
    const cRExpiryDate = screen.getByText("CR Expiry date");
    const commercialLicenseNumber = screen.getByText(
      "Commercial License Number *"
    );
    const commercialLicenseIssueDate = screen.getByText(
      "Commercial License Issue date"
    );
    const commercialLicenseExpiryDate = screen.getByText(
      "Commercial License Expiry date"
    );
    const nationalWasteNumber = screen.getByText(
      "National Waste Center License Number *"
    );
    const licenseIssueDate = screen.getByText("License Issue date *");
    const licenseExpiryDate = screen.getByText("License Expiry date *");
    const WorkingArea = screen.getByText("Working area*");
    const CompanyImage = screen.getByText("Company image");

    expect(crNumber).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    expect(managerName).toBeInTheDocument();
    expect(partnerName).toBeInTheDocument();
    expect(cRIssueDate).toBeInTheDocument();
    expect(commercialLicenseNumber).toBeInTheDocument();
    expect(commercialLicenseIssueDate).toBeInTheDocument();
    expect(commercialLicenseExpiryDate).toBeInTheDocument();
    expect(nationalWasteNumber).toBeInTheDocument();
    expect(licenseIssueDate).toBeInTheDocument();
    expect(licenseExpiryDate).toBeInTheDocument();
    expect(WorkingArea).toBeInTheDocument();
    expect(CompanyImage).toBeInTheDocument();
  });

  test("renders app with next, previous and finish button", () => {
    render(<App />);

    const nextButtons = screen.getAllByText("Next");
    const previousButtons = screen.getAllByText("Previous");
    const finishButton = screen.getByText("Finish");
    expect(finishButton).toBeInTheDocument();
    expect(previousButtons).toHaveLength(7);
    expect(nextButtons).toHaveLength(7);
  });

  test("renders app with all input fields with placeholder of Write something", () => {
    render(<App />);

    const allInputFields = screen.getAllByPlaceholderText("Write something");
    expect(allInputFields).toHaveLength(7);
  });

  test("renders app with all input fields with placeholder of Write something", () => {
    render(<App />);

    const allInputFields = screen.getAllByPlaceholderText("Write something");
    expect(allInputFields).toHaveLength(7);
  });

  test("renders app with CheckBoxes of second step", () => {
    render(<App />);

    const alaqiq = screen.getByText("Alaqiq");
    const quibaa = screen.getByText("Quibaa");
    const alawali = screen.getByText("Alawali");
    const uhud = screen.getByText("Uhud");

    expect(alaqiq).toBeInTheDocument();
    expect(quibaa).toBeInTheDocument();
    expect(alawali).toBeInTheDocument();
    expect(uhud).toBeInTheDocument();
  });
});
