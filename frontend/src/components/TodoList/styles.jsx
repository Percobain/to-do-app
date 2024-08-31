import styled from "styled-components";

export const ListContainer = styled.ul`
    padding: 0;
    cursor: pointer;
`;

export const Row = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 1rem;
`;

export const TextContainer = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Text = styled.span`
    ::first-letter {
        text-transform: capitalize;
    }
    color: ${(props) => (props.isCompleted ? "red": null)};
    text-decoration: ${(props) => (props.isCompleted ? "line-through": null)};
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
`;

export const DeleteIcon = styled.img`
    cursor: pointer;
    width: 24px;
    height: 24px;
`;

export const EditIcon = styled.img`
    cursor: pointer;
    width: 24px;
    height: 24px;
`;

export const EditText = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;