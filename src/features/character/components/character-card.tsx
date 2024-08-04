import { useState } from "react";
import { CharacterDataPruned } from "../../../api/types";
import { P } from "../../../components/atoms/typography";
import InformationLabel from "../../../components/molecules/information-label";
import { Button } from "../../../components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/card";
import { Input } from "../../../components/shadcn/input";
import useUpdateCharacter from "../hooks/use-update-character";
import Films from "./films";

function CharacterCard({
  eye_color,
  films,
  gender,
  hair_color,
  name,
  height,
  id,
}: CharacterDataPruned) {
  const [heightInput, setHeightInput] = useState(height);
  const [genderInput, setGenderInput] = useState(gender);
  const { mutateAsync: updateCharacter } = useUpdateCharacter();
  const updateHeight = () => {
    updateCharacter({ height: heightInput, id });
  };
  const updateGender = () => {
    updateCharacter({ gender: genderInput, id });
  };
  // todo - add loading / error states to the mutations
  return (
    <Card className="max-w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Personal Information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <InformationLabel title="Eye color:" value={eye_color} />
        <InformationLabel title="Hair color:" value={hair_color} />
        <P className="font-bold">Height (cm):</P>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            value={heightInput}
            onChange={(e) => setHeightInput(e.target.value)}
          />
          <Button onClick={() => updateHeight()}>Update Height</Button>
        </div>
        <P className="font-bold">Gender:</P>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            value={genderInput}
            onChange={(e) => setGenderInput(e.target.value)}
          />
          <Button onClick={() => updateGender()}>Update Gender</Button>
        </div>
        <Films films={films} />
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
