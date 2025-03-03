const V4AndV5VueThirdSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">How it works ?</h2>
    <ul className="mt-4 pl-6 list-disc">
      <li className="mb-3">
        Add your routes and items in the
        <span className="px-1 font-semibold">
          dashboard/sidenavigation/items.vue
        </span>
        file
      </li>
      <li className="mb-3">
        If your routes don't exist yet, create your routes in the
        <span className="px-1 font-semibold">pages</span>directory and import
        them in
        <span className="px-1 font-semibold">routes.js</span>
        file
      </li>
      <li className="mb-3">
        Wrap the <span className="font-semibold">App.vue</span> by the
        <span className="pl-1 font-semibold">dashboard-layout</span> component
      </li>
    </ul>
  </section>
);

export default V4AndV5VueThirdSection;
