import { FolderIcon, VueIcon } from '@/src/components/icons/icons';
import { VueSnippetAccordion } from '@/src/docs/common/snippets';

const V8VueSecondSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure explained</h2>
    <p className="mt-5">
      We will focus on <strong>dashboard</strong> folder and its{' '}
      <strong>subfolders</strong> which contain all the logic.
    </p>

    <div className="mb-12 mt-5">
      <div className="flex">
        <FolderIcon />
        <strong className="px-1">provider</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <VueIcon extend-class="h-7 w-7" />
        <span className="px-2 font-medium">Context.vue</span> :
        <p className="pl-2">
          contains the <strong>dashboard-provider</strong> component where all
          the dashboard logic is placed. this will then be reused in other
          components. it handles the closing of the sidenav when the route
          changes or on click outside.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-medium">Overlay.vue</span> :
        <p className="pl-2">
          displays an overlay that will only be visible on small screens to
          emphasize the focus on the sidenav when it is open
        </p>
      </div>
    </div>

    <div className="mb-8">
      <div className="flex">
        <FolderIcon />
        <strong className="px-1">sidenavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <FolderIcon extend-class="h-5 w-5" />
        <span className="px-2 font-medium">accordion</span> :
        <p className="pl-1">
          contains the <strong>Accordion</strong> component which is used to
          toggle each section of sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <FolderIcon extend-class="h-7 w-7" />
        <span className="px-2 font-medium">icons</span> :
        <p className="pl-1">
          As each <strong>sidenav-item</strong> has an icon, this sub-folder
          contains the icons of each sidenav-item. You don't need this folder if
          you are using a package for icons such as
          <strong>font-awesome</strong>
          or other
        </p>
      </div>
      <div className="flex flex-wrap mt-10 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-medium">Header.vue</span> :
        <p className="pl-1">
          The <strong> sidenav-header</strong> component contains the logo that
          is displayed on top of the sidenav
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-medium">Item.vue</span> :
        <p className="pl-1">
          Contains the <strong>sidenav-item</strong> component which represents
          each item of the sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-medium">Items.vue</span> :
        <p className="pl-1">
          This <strong>sidenav-items</strong> component contains the
          <strong> accordion</strong> and
          <strong> sidenav-item</strong> components
        </p>
      </div>
      <div className="flex flex-wrap mb-12 mt-8 pl-8">
        <div className="lg:w-8/12">
          <VueSnippetAccordion />
        </div>
        <ul className="pt-8 md:pl-4 md:pt-4 md:w-6/12">
          <li className="mb-2">
            <strong className="px-1">template #item :</strong> contains the name
            of the section
          </li>
          <li className="mb-2">
            <strong className="px-1">template #panel :</strong> content of the
            accordion (sidenav-item)
          </li>
          <li className="mb-3 mt-4">
            <span className="px-1 font-bold">Props :</span>
          </li>
          <li className="mb-2">
            <strong className="px-1">title :</strong> text that indicate the
            route
          </li>
          <li className="mb-2">
            <strong className="px-1">to :</strong> name of the route
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-medium">Index.vue</span> :
        <p className="pl-1">
          This <strong>side-navigation</strong> component contains all the logic
          of the sidenav.
        </p>
      </div>
    </div>

    <div>
      <div className="flex mt-8">
        <FolderIcon />
        <strong className="px-1">topnavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-medium">Index.vue</span> :
        <p className="pl-1">
          Contains the
          <strong> top-navigation</strong> component. You can customize it or
          replace it with your own navbar but don't forget to add a button to
          toggle sidenav on mobile
        </p>
      </div>
    </div>

    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <VueIcon />
        <strong className="px-1">Layout.vue :</strong> Contains the
        <strong className="px-1">dashboard-layout</strong> component used as the
        layout of the application
      </div>
    </div>
  </section>
);

export default V8VueSecondSection;
