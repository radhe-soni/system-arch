export const Root = {
    nodes: [{ id: "Harry", label: "Harry Potter"},
    { id: "Hermione", label: "Hermione Granger"  },
    { id: "Ron", label: "Ron Weasley"  }],
    edges: [
        { from: "Harry", to: "Hermione" },
        { from: "Harry", to: "Ron" },
    ],
};
export default Root;
export const NodeDetails = {
    Harry: {
        nodes: [{ id: "Harry", label: "Harry Potter" },
        { id: "Lilly", label: "Lilly Potter" },
        { id: "James", label: "James Potter" }],
        edges: [
            { from: "Lilly", to: "Harry" },
            { from: "James", to: "Harry" },
        ],
    },
    Hermione: {
        nodes: [{ id: "Hermione", label: "Hermione Granger" },
        { id: "Mr", label: "Mr Granger" },
        { id: "Mrs", label: "James Granger" }],
        edges: [
            { from: "Mr", to: "Hermione" },
            { from: "Mrs", to: "Hermione" },
        ],
    },
    Ron: {
        nodes: [{ id: "Ron", label: "Ron Weasley" },
        { id: "Molly", label: "Ron Weasley" },
        { id: "Arthur", label: "Ron Weasley" }],
        edges: [
            { from: "Molly", to: "Ron" },
            { from: "Arthur", to: "Ron" },
        ],
    }
}