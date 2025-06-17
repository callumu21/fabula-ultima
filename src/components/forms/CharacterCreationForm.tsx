import { useState, type ChangeEvent } from "react";
import ExpandingDropdownSelect from "./inputs/ExpandingDropdownSelect";
import Input from "./inputs/Input";
import type { Class } from "../../types/character";

const availableClasses = [
  "ACE OF CARDS",
  "ARCANIST",
  "CHANTER",
  "CHIMERIST",
  "COMMANDER",
  "DANCER",
  "DARKBLADE",
  "ELEMENTALIST",
  "ENTROPIST",
  "ESPER",
  "FLORIST",
  "FURY",
  "GOURMET",
  "GUARDIAN",
  "INVOKER",
  "LOREMASTER",
  "MERCHANT",
  "MUTANT",
  "NECROMANCER",
  "ORATOR",
  "PILOT",
  "ROGUE",
  "SHARPSHOOTER",
  "SPIRITIST",
  "SYMBOLIST",
  "TINKERER",
  "WAYFARER",
  "WEAPONMASTER",
];

const defaultCharacter = {
  name: "",
  origin: "",
  theme: "",
  identity: "",
  classes: [] as Class[],
  level: "5",
};

const CharacterCreationForm = () => {
  const [characterData, setCharacterData] = useState(defaultCharacter);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setCharacterData((values) => ({ ...values, [name]: value }));
    console.log(event.target.name);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(characterData);
      }}
      className="space-y-6 max-w-3xl mx-auto p-6"
    >
      <h2 className="text-2xl font-bold">Create a Character</h2>

      <div>
        <h3 className="font-semibold mb-4">Details</h3>
        <div className="grid grid-cols-2 gap-8">
          <Input
            value={characterData.name || ""}
            onChange={handleChange}
            labelText="Name"
            id="name"
            name="name"
          />
          <Input
            value={characterData.level || "5"}
            onChange={handleChange}
            type="number"
            labelText="Level"
            id="level"
            name="level"
          />
          <Input
            value={characterData.identity || ""}
            onChange={handleChange}
            labelText="Identity"
            id="identity"
            name="identity"
          />
          <Input
            value={characterData.theme || ""}
            onChange={handleChange}
            labelText="Theme"
            id="theme"
            name="theme"
          />
          <Input
            value={characterData.origin || ""}
            onChange={handleChange}
            labelText="Origin"
            id="origin"
            name="origin"
          />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Classes</h3>
        <ExpandingDropdownSelect
          options={availableClasses}
          placeholder={"Select a class"}
          handleChange={(selectedValues) => {
            console.log(selectedValues);
            setCharacterData((currentCharacterData) => {
              const updatedCharacterData = { ...currentCharacterData };

              updatedCharacterData.classes = [...selectedValues] as Class[];

              return updatedCharacterData;
            });
          }}
        />
      </div>

      <button
        type="submit"
        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
      >
        Save Character
      </button>
    </form>
  );
};

export default CharacterCreationForm;
