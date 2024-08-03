import { CharacterDataPruned } from "../../../api/types";
import { P } from "../../../components/atoms/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/card";
import Films from "./films";

function CharacterCard({
  eye_color,
  films,
  gender,
  hair_color,
  name,
  height,
}: CharacterDataPruned) {
  return (
    <Card className="max-w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Personal Information</CardDescription>
      </CardHeader>
      <CardContent>
        <P>Eye color: {eye_color}</P>
        <P>Gender: {gender}</P>
        <P>Hair color: {hair_color}</P>
        <P>Height: {height}cm</P>

        <Films films={films} />
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
