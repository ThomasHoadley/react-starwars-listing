import { H2, P } from "../../components/atoms/typography";
import { Card } from "../../components/shadcn/card";
import CharactersListing from "../../features/character-list";

function CharactersListingPage() {
  return (
    <div>
      <div className="text-center space-y-2 mb-6">
        <H2>Character Listing</H2>
        <P className="italic">
          Click the link below for more information on your favourite Star Wars
          Characters
        </P>
      </div>
      <Card className="p-10">
        <CharactersListing />
      </Card>
    </div>
  );
}

export default CharactersListingPage;
