import React from 'react';
import { Difficulty } from '@/hooks/useSudoku';

interface DifficultyButtonsProps {
  onDifficultySelect: (difficulty: Difficulty) => void;
}

export const DifficultyButtons: React.FC<DifficultyButtonsProps> = ({
  onDifficultySelect
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
      <button
        className="difficulty-btn difficulty-warm-up"
        onClick={() => onDifficultySelect('warm-up')}
      >
        Rookie
      </button>
      <button
        className="difficulty-btn difficulty-challenge"
        onClick={() => onDifficultySelect('challenge')}
      >
        Pro
      </button>
      <button
        className="difficulty-btn difficulty-brain-fire"
        onClick={() => onDifficultySelect('brain-fire')}
      >
        Master
      </button>
    </div>
  );
};