/* 6×6×12 spatial grid component */

import React from "react";

const ThreeSidedGrid = () => {
  const size = 6;
  const divisions = 6;
  const color = "gray";

  return (
    <group position={[0, 0, 0]}>
      {/* Bottom surface */}
      <gridHelper
        args={[size, divisions, color]}
        position={[size / 2, 0, size / 2]}
      />
      {/* left side */}
      <gridHelper
        args={[size, divisions, color]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, (3 * size) / 2, size / 2]}
      />
      <gridHelper
        args={[size, divisions, color]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, size / 2, size / 2]}
      />
      {/* rear side */}
      <gridHelper
        args={[size, divisions, color]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[size / 2, (3 * size) / 2, 0]}
      />
      <gridHelper
        args={[size, divisions, color]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[size / 2, size / 2, 0]}
      />
    </group>
  );
};

export default ThreeSidedGrid;
