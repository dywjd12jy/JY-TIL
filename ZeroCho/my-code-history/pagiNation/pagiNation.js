// Node13 + React18 + Tailwind + TS 


'use client';

import { Button } from '@components/button/Button';
import { useEffect, useState } from 'react';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

export const PaginationContainer = ({ countsParams }: PaginationParams) => {
  // const Array = [];
  const count = 192;
  const listCount = 10;
  // const pageAllCount = Math.ceil(count / listCount); //20
  const [pageAllCount, setPageAllCount] = useState(20);
  // for (let i = 1; i <= pageAllCount; i++) {
  //   Array.push(i);
  // }
  ////
  const [targetPageCount, setTargetPageCount] = useState(pageAllCount);
  const [onPageCount, setOnPageCount] = useState(1);

  const buttonArray = document.querySelectorAll('button');
  console.log(buttonArray);
  buttonArray.forEach((item) => {
    if (onPageCount === Number(item.dataset.page)) {
      item.style.background = '#53FA7D';
      item.style.color = '#1E1F25';
      item.addEventListener('mouseover', () => {
        item.style.background = '#53FA7D';
        item.style.color = '#1E1F25';
      });
    } else item.style.background = '#444857';
    item.style.color = '#F9F9F2';
  });

  const onNumButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOnPageCount(Number(e.currentTarget.dataset.page));
  };
  const [numButtonArray, setNumButtonArray] = useState<number[]>([]);

  const onMaxBefore = () => {
    setOnPageCount(1);
  };
  const onMaxAfter = () => {
    setOnPageCount(pageAllCount);
  };

  const onBefore = () => {
    if (onPageCount > 1) setOnPageCount(onPageCount - 1);
  };
  const onAfter = () => {
    if (onPageCount < pageAllCount) setOnPageCount(onPageCount + 1);
  };

  useEffect(() => {
    if (targetPageCount < 3) {
      setNumButtonArray([1, 2]);
    } else if (targetPageCount === onPageCount) {
      setNumButtonArray([onPageCount - 2, onPageCount - 1, onPageCount]);
    } else if (onPageCount <= 2) {
      setNumButtonArray([1, 2, 3]);
    } else if (targetPageCount >= 3) {
      setNumButtonArray([onPageCount - 1, onPageCount, onPageCount + 1]);
    }
  }, [targetPageCount, onPageCount]);

  if (pageAllCount === 1)
    return (
      <div className="w-ful flex justify-center">
        <Button className="h-3.2 w-3.2 cursor-pointer bg-primary text-black">1</Button>
      </div>
    );

  return (
    <div className="flex flex-col">
      <span className="mb-3.2 text-center text-lg">{onPageCount}</span>
      <div className="flex w-full items-center justify-center gap-1 ">
        {onPageCount > 3 ? (
          <BsChevronBarLeft onClick={onMaxBefore} className="h-2 w-2 cursor-pointer stroke-1 desktop:hover:stroke-primary" />
        ) : null}
        {onPageCount > 1 ? (
          <MdOutlineKeyboardArrowLeft onClick={onBefore} className="h-3.2 w-3.2 cursor-pointer desktop:hover:fill-primary" />
        ) : null}
        <div className="flex cursor-pointer gap-1">
          {numButtonArray.map((value) => (
            <Button
              onClick={onNumButton}
              key={value}
              data-page={value}
              className="h-3.2 w-3.2 cursor-pointer bg-neutral desktop:hover:bg-primary desktop:hover:text-black"
            >
              {value}
            </Button>
          ))}
        </div>
        {onPageCount < pageAllCount ? (
          <MdOutlineKeyboardArrowRight onClick={onAfter} className="h-3.2 w-3.2 cursor-pointer desktop:hover:fill-primary" />
        ) : null}
        {onPageCount < pageAllCount - 2 ? (
          <BsChevronBarRight onClick={onMaxAfter} className="h-2 w-2 cursor-pointer stroke-1 desktop:hover:stroke-primary" />
        ) : null}
      </div>
    </div>
  );
};

// import { Button } from '@components/button/Button';
// import { useState } from 'react';
// import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

// export const PaginationContainer = ({ countsParams }: PaginationParams) => {
//   // const [count, setCount] = useState(190);
//   const pageCountArray: any = [];
//   const count = 192;
//   const listCount = 10;
//   const pageAllCount = Math.ceil(count / listCount);

//   const [targetPageCount, setTargetPageCount] = useState(3);
//   const targetPageBefore = targetPageCount - 1;
//   const targetPageAfter = targetPageCount + 1;
//   // const targetPageCountArray = [targetPageCount - 1, targetPageCount, targetPageCount + 1];

//   const pageMax = pageAllCount - 1;

//   const onPage = (e: any) => {
//     const targetPage = Number(e.target.dataset.page);
//     // if (targetPage > 0 && targetPage <= pageAllCount) setTargetPageCount(targetPage);
//     if (targetPageCount > 1 && targetPageCount < pageMax) {
//       setTargetPageCount(targetPage);
//     } else setTargetPageCount(pageMax);

//     console.log(targetPage);
//     console.log(targetPageCount);
//     console.log(pageAllCount);
//   };

//   const onBefore = (e: any) => {
//     if (targetPageCount > 1) setTargetPageCount(targetPageCount - 1);
//   };
//   const onAfter = (e: any) => {
//     if (targetPageCount < pageAllCount) setTargetPageCount(targetPageCount + 1);
//   };
//   const onBeforeMax = () => {
//     setTargetPageCount(2);
//   };
//   const onAftereMax = () => {
//     if (targetPageCount < pageAllCount) setTargetPageCount(pageAllCount);
//   };

//   return (
//     <div className="flex flex-col">
//       <span className="mb-3.2 text-center text-lg">{targetPageCount}</span>
//       <div className="flex w-full items-center justify-center gap-1">
//         {targetPageCount > 2 ? (
//           <BsChevronBarLeft onClick={onBeforeMax} className="h-2 w-2 cursor-pointer stroke-1 desktop:hover:stroke-primary" />
//         ) : null}
//         {targetPageCount > 1 ? (
//           <MdOutlineKeyboardArrowLeft onClick={onBefore} className="h-3.2 w-3.2 cursor-pointer desktop:hover:fill-primary" />
//         ) : null}
//         <div className="flex cursor-pointer gap-1">
//           {/* {targetPageCount > 1 ? (
//             <Button
//               onClick={onPage}
//               key={targetPageBefore}
//               data-page={targetPageBefore}
//               className="h-3.2 w-3.2 cursor-pointer bg-neutral desktop:hover:bg-primary desktop:hover:text-black"
//             >
//               {targetPageBefore}
//             </Button>
//           ) : null} */}
//           <Button
//             onClick={onPage}
//             key={targetPageBefore}
//             data-page={targetPageCount > 1 ? targetPageBefore : targetPageCount}
//             className="h-3.2 w-3.2 cursor-pointer bg-neutral desktop:hover:bg-primary desktop:hover:text-black"
//           >
//             {targetPageCount > 1 ? targetPageBefore : targetPageCount}
//             {targetPageCount < pageMax ? targetPageAfter : pageMax - 1}
//           </Button>
//           <Button
//             onClick={onPage}
//             key={targetPageCount}
//             data-page={targetPageCount > 1 ? targetPageCount : targetPageAfter}
//             className="h-3.2 w-3.2 cursor-pointer bg-neutral desktop:hover:bg-primary desktop:hover:text-black"
//           >
//             {targetPageCount > 1 && targetPageCount < pageMax ? targetPageCount : pageMax}

//             {/* {targetPageCount > 1 ? targetPageCount : targetPageAfter}
//             {targetPageCount < pageMax ? targetPageAfter : pageMax} */}
//           </Button>
//           <Button
//             onClick={onPage}
//             key={targetPageAfter}
//             data-page={targetPageCount > 1 ? targetPageAfter : targetPageAfter + 2}
//             className="h-3.2 w-3.2 cursor-pointer bg-neutral desktop:hover:bg-primary desktop:hover:text-black"
//           >
//             {/* {targetPageCount > 1 ? targetPageAfter : targetPageAfter + 1} */}
//             {targetPageCount < pageMax ? targetPageAfter : pageAllCount}
//           </Button>
//           {/* {targetPageCount < pageAllCount ? (
//             <Button
//               onClick={onPage}
//               key={targetPageAfter}
//               data-page={targetPageAfter}
//               className="h-3.2 w-3.2 cursor-pointer bg-neutral desktop:hover:bg-primary desktop:hover:text-black"
//             >
//               {targetPageAfter}
//             </Button>
//           ) : null} */}
//         </div>
//         {targetPageCount < pageAllCount ? (
//           <MdOutlineKeyboardArrowRight onClick={onAfter} className="h-3.2 w-3.2 cursor-pointer desktop:hover:fill-primary" />
//         ) : null}
//         {targetPageCount < pageMax ? (
//           <BsChevronBarRight onClick={onAftereMax} className="h-2 w-2 cursor-pointer stroke-1 desktop:hover:stroke-primary" />
//         ) : null}
//       </div>
//     </div>
//   );
// };
