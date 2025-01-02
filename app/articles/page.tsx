export default function Articles() {

    // fetch list of articles of page only.
    // new server request fetch cycle per page.
    // search bar request fetch cycle per search, affects parent component.

    return (
        <>
            <div> SEARCH BAR </div>
            <div> GRID OF PAGINATED ARTICLES </div>
        </>
    );
}