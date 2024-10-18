const API_HOST = "https://sprint-mission-api.vercel.app";

//----------게시글 목록 조회---------
export function getArticleList(page, pageSize, keyword) {
  return fetch(
    `${API_HOST}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 목록 조회 오류:" + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error:", error);
      return null;
    });
}

//----------------게시글 등록-------------------
export const createArticle = async (createData) => {
  const response = await fetch(`${API_HOST}/articles`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createData),
  });

  const data = await response.json();

  return {
    status: response.status,
    body: data,
  };
};

//----------------게시글 상세 조회-------------------
export function getArticle(id) {
  return fetch(`${API_HOST}/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글을 찾을 수 없음: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("오류:", error);
      return null;
    });
}

//----------------게시글 수정-------------------
export function patchArticle(id, articleData) {
  return fetch(`${API_HOST}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 수정 오류: " + response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("오류:", error);
      return null;
    });
}

//----------------게시글 삭제-------------------
export function deleteArticle(id) {
  return fetch(`${API_HOST}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 삭제 오류: " + response.statusText);
      }
      return response.status;
    })
    .catch((error) => {
      console.error("오류:", error);
      return null;
    });
}
