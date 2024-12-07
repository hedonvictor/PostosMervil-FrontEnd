import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder={placeholder}
        className="me-2"
        value={query}
        onChange={handleInputChange}
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
