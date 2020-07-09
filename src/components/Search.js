import React, { useEffect, useState } from "react";

export default function Search(props) {
  const [searchResult, setsearchResult] = useState(props);
  const [posts, setPosts] = useState(props);

  useEffect(() => {
    setsearchResult(props.getInputValue);
    setPosts(props.posts);
  }, [props]);

  const onChangeInput = (e) => {
    let formatedInput = e.toLowerCase();
    let queries = posts.filter((item) =>
      item.title.toLowerCase().includes(formatedInput)
    );
    searchResult(queries);
  };
  return (
    <div class="form__group field">
      <input
        onChange={e => onChangeInput(e.target.value)}
        type="input"
        class="form__field"
        placeholder="Search..."
        name="name"
        id="name"
        required
      />
      <label for="name" class="form__label">
        Search
      </label>
    </div>
  );
}
