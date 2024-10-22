import BreadCrumb from "components/common/Breadcrumb";
import SingleTeamDetails from "./components/SingleTeamDetails";
import SingleTeamSkill from "./components/SingleTeamSkills";
function SingleTeam() {
	return (
		<>
			<BreadCrumb title="Team Details" />
			<SingleTeamDetails />
			<SingleTeamSkill />
		</>
	);
}

export default SingleTeam;
