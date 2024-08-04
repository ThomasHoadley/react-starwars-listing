import { H2 } from "../../components/atoms/typography";
import { Card } from "../../components/shadcn/card";
import CharactersListing from "../../features/character-listing";

function CharactersListingPage() {
  return (
    <div>
      <H2 className="text-center">Character Listing</H2>
      <Card className="p-10">
        <CharactersListing />
      </Card>
    </div>
  );
}

export default CharactersListingPage;
