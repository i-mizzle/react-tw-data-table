import './App.css';
import DataTable from './components/DataTable';
import { useState } from 'react';

function App() {

  const PhotoIcon = ({className}) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    
    )
  }

  const ItemSnippet = ({itemName, itemDescription, section, category, showIcon}) => {
    return (
      <div className='flex items-center gap-x-3'>
          {showIcon && <PhotoIcon className={`w-12 h-12 p-3 rounded-sm text-gray-400 border border-gray-400 bg-gray-100`} />}
          <div>
              <p className='font-medium text-gray-600 text-base'>{itemName}</p>
              <p className='text-gray-6400 text-sm mt-1 font-thin'>{itemDescription}</p>
          </div>
      </div>
    )
  }

  const convertCamelCase = (camelCaseText) => {
    const text = camelCaseText;
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

    return finalResult
}

 const tableHeadersFields = (sampleObject) => {
  if(!sampleObject) {
      return []
  }
  const headers = []
  const fields = []
  Object.keys(sampleObject).forEach((key, index)=>{
      let columnDataType = 'text'
      let forPopover = false
      let columnDisplayName = convertCamelCase(key)
      let sortable = false
      let column = key

      headers.push({
          column,
          columnDisplayName,
          data: sampleObject[key],
          sortable,
          forPopover,
          columnDataType
      })

      let fieldSelected = true

      if(index > 10) {
          fieldSelected = false
      }
      fields.push({
          name: columnDisplayName,
          selected: fieldSelected
      })
  });
  return {headers, fields}
}

  const items = [
    {
      id: '36727',
      name: "Guinness stout - foreign extra",
      itemImage: "",
      section: "bar",
      category: "alcoholic-beverages",
      variants: [
        {
          name: "Large",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 700000,
          costUnit: "cartons",
          sellingPrice: 75000,
          sellingUnit: "bottles",
          lastStockDate: '12/12/2022',
          sellingUnitsPerCostUnit: 12,
          storeStock: 19,
          storeFrontStock: 5,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        },
        {
          name: "Medium",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 600000,
          costUnit: "cartons",
          sellingPrice: 65000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 12,
          storeStock: 12,
          storeFrontStock: 5,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        },
        {
          name: "Large",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 500000,
          costUnit: "cartons",
          sellingPrice: 50000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 20,
          storeStock: 12,
          storeFrontStock: 34,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        }
      ]
    },
    {
      id: '38527',
      name: "Guinness stout - extra smooth",
      itemImage: "",
      section: "bar",
      category: "alcoholic-beverages",
      variants: [
        {
          name: "Medium",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 600000,
          costUnit: "cartons",
          sellingPrice: 65000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 12,
          storeStock: 12,
          storeFrontStock: 0,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        }
      ]
    },
    {
      id: '99727',
      name: "Star lager beer",
      itemImage: "",
      section: "bar",
      category: "alcoholic-beverages",
      variants: [
        {
          name: "Standard",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 700000,
          costUnit: "cartons",
          sellingPrice: 75000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 12,
          storeStock: 12,
          storeFrontStock: 5,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        }
      ]
    },
    {
      id: '85697',
      name: "Tiger beer",
      itemImage: "",
      section: "bar",
      category: "alcoholic-beverages",
      variants: [
        {
          name: "Standard",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 500000,
          costUnit: "cartons",
          sellingPrice: 40000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 20,
          storeStock: 12,
          storeFrontStock: 34,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        }
      ]
    },
    {
      id: '45365',
      name: "Coke",
      itemImage: "",
      section: "bar",
      category: "soft-drinks",
      variants: [
        {
          name: "PET plastic - 50cl",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 150000,
          costUnit: "packs",
          sellingPrice: 20000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 12,
          storeStock: 12,
          storeFrontStock: 34,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',    
          lowStockAlert: 5,
        },
        {
          name: "PET plastic - 35cl",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 150000,
          costUnit: "packs",
          sellingPrice: 15000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 12,
          storeStock: 12,
          storeFrontStock: 34,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',    
          lowStockAlert: 5,
        },
        {
          name: "Bottle",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 300000,
          costUnit: "crates",
          sellingPrice: 15000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 24,
          storeStock: 12,
          storeFrontStock: 34,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',   
          lowStockAlert: 5,
        },
      ]
    },
    {
      id: '77475',
      name: "Sprite",
      itemImage: "",
      section: "bar",
      category: "soft-drinks",
      variants: [
        {
          name: "PET plastic - 50cl",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 150000,
          costUnit: "packs",
          sellingPrice: 20000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 12,
          storeStock: 12,
          storeFrontStock: 34,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        },
        {
          name: "PET plastic - 35cl",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 150000,
          costUnit: "packs",
          sellingPrice: 15000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 12,
          storeStock: 12,
          storeFrontStock: 34,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
          lowStockAlert: 5,
        },
        {
          name: "Bottle",
          description: 'Culpa culpa occaecat aliqua tempor non voluptate sit qui ullamco laborum.',
          costPrice: 300000,
          costUnit: "crates",
          sellingPrice: 15000,
          sellingUnit: "bottles",
          sellingUnitsPerCostUnit: 24,
          storeStock: 12,
          storeFrontStock: 34,
          lowStockAlert: 5,
          lastStoreStockDate: '12/12/2022',
          lastStoreFrontStockDate: '12/12/2022',
        },
      ]
    }
  ]

  const columnWidths = {
    id: "w-full lg:w-1/12",
    item: "w-full lg:w-4/12",
    category: 'w-full lg:w-2/12',
    variants: "w-full lg:w-1/12",
    storeStock: "w-full lg:w-2/12",
    storeFrontStock: "w-full lg:w-2/12"
  }

 const unSlugify = (string) => {
  if(!string || string === '') {
      return
  }
  return string.replace(/[_-]/g, " "); 
  // return string.replace(/[^0-9_-]/g, ' ')
}

const ArrowNarrowRight = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

  const cleanupData = (dataSet) => {
    const data = []

    dataSet.forEach((item, itemIndex) => {
    data.push(
        {
          id: item.id,
          item: <ItemSnippet section={item.section} category={item.category} showIcon={true} itemName={item.name} itemDescription="Exercitation ipsum excepteur laboris velit dolore." />,
          category: <p className={`text-sm font-light mt-2 text-gray-600 capitalize flex items-center gap-x-1`}>{unSlugify(item.section.toLowerCase())} <ArrowNarrowRight className={`w-4 h-4 transform mt-1`} /> {unSlugify(item.category.toLowerCase())}</p>,
          variants: `${item.variants.length} variant${item.variants.length > 1 ? 's' : ''}`,
          storeStock: item.variants.reduce((a, b) => a + (b.storeStock || 0), 0).toLocaleString() + ' ' + item.variants[0].costUnit,
          storeFrontStock: item.variants.reduce((a, b) => a + (b.storeFrontStock || 0), 0).toLocaleString() + ' ' + item.variants[0].sellingUnit,
        },
      )
    })

    return data
  }

  const [rowOpen, setRowOpen] = useState(null)

  const toggleRowOpen = (rowIndex) => {
      if(rowOpen === null) {
          setRowOpen(rowIndex)
      } else {
          setRowOpen(null)
      }
  } 

  const tableOptions = {
      selectable: false,
      expandable: true,
      clickableRows: true,
      rowAction: (value)=>{toggleRowOpen(value)}
  }

  const StockBadge = ({status}) => {
    return (
      <div className={`py-1 px-2 rounded  bg-opacity-10 w-max 
          ${status === 'In stock' && 'border-green-600 bg-green-600'} 
          ${status === 'Low' && 'border-yellow-800 bg-yellow-600'}
          ${status === 'Out of stock' && 'border-red-600 bg-red-400'}
      `}>
          <p className={`text-xs 
              ${status === 'In stock' && 'text-green-600'} 
              ${status === 'Low' && 'text-yellow-800'}
              ${status === 'Out of stock' && 'text-red-600'}
          `}>
              {status}
          </p>
      </div>
    )
  }

  const ItemExpansion = ({items, rowOpen}) => {
    return (
      <div className='w-full bg-gray-100 border-t border-gray-300 rounded-b-md py-6 px-12'>
          <h3 className='font-medium mb-4'>Variants of this Item</h3>
          {items[rowOpen].variants && items[rowOpen].variants.length > 0 && items[rowOpen].variants.map((variant, variantIndex) => (
              <div key={variantIndex} className='flex flex-row gap-x-4 justify-between my-3 hover:bg-gray-200 transition duration-200 py-2 rounded px-6'>
                  <div className='flex gap-x-2 items-start w-full'>
                      <div>
                          <p className='font-medium'>{variant?.name}</p>
                          <p className='font-thin text-gray-400 text-sm'>{variant?.description}</p>
                      </div>
                  </div>
                  <div className=' w-full'>
                      <p className='font-medium'>₦{(variant?.costPrice/100).toLocaleString()}<span className='font-thin'>/{variant.costUnit}</span><br />{variant?.storeStock} {variant.costUnit} in store</p>
                  </div>
                  <div className=' w-full'>
                      <p className='font-medium'>₦{(variant?.sellingPrice/100).toLocaleString()}<span className='font-thin'>/{variant.sellingUnit}</span> <br />{variant?.storeFrontStock} {variant.sellingUnit} in storefront</p>
                  </div>
                  <div className=' w-full'>
                      <p className='font-medium'>{variant?.sellingUnitsPerCostUnit} {variant.sellingUnit}/{variant.costUnit}</p>
                  </div>
                  <div className='w-[400px]'>
                      {/* <p className='font-medium'>{variant?.sellingUnitsPerCostUnit} {variant.sellingUnit}/{variant.costUnit}</p> */}
                      <StockBadge status={
                          `${variant.storeFrontStock <= variant.lowStockAlert && variant.storeFrontStock > 0 ? 'Low' : variant.storeFrontStock === 0 ? 'Out of stock' : variant.storeFrontStock > variant.lowStockAlert && 'In stock'}`
                      } />
                  </div>
              </div>
          ))}
  
          {/* <button className='flex flex-row items-center gap-x-3 mt-5 hover:text-blue-700 transition duration-200'>See full order details <ArrowNarrowRight className={`w-6 h-6`} /></button> */}
  
      </div>
    )
  }

  return (
    <div className='w-10/12 mx-auto py-24'>
        <DataTable
            tableHeaders={tableHeadersFields(cleanupData(items)[0]).headers} 
            tableData={cleanupData(items)} 
            columnWidths={columnWidths}
            columnDataStyles={{}}
            allFields={tableHeadersFields(cleanupData(items)[0]).fields}
            onSelectItems={()=>{}}
            tableOptions={tableOptions}
            pagination={{
                perPage: 25, 
                currentPage: 1,
                totalItems: 476,
            }}
            changePage={()=>{}}
            updatePerPage={()=>{}}
            expandedIndex={rowOpen || ''}
            expansion={<ItemExpansion items={items} rowOpen={rowOpen} />}
        />
    </div>
  );
}

export default App;
