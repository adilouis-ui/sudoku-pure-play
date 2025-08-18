import React from 'react';
import { Difficulty } from '@/hooks/useSudoku';

interface DifficultyButtonsProps {
  onDifficultySelect: (difficulty: Difficulty) => void;
  currentDifficulty?: Difficulty;
  variant?: 'standalone' | 'segmented';
}

export const DifficultyButtons: React.FC<DifficultyButtonsProps> = ({
  onDifficultySelect,
  currentDifficulty,
  variant = 'standalone'
}) => {
  const containerClass = variant === 'segmented' 
    ? "difficulty-buttons-container" 
    : "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 standalone";

  return (
    <div className={containerClass}>
      <button
        className={`difficulty-btn difficulty-warm-up ${currentDifficulty === 'warm-up' ? 'active' : ''}`}
        onClick={() => onDifficultySelect('warm-up')}
      >
        Rookie
      </button>
      <button
        className={`difficulty-btn difficulty-challenge ${currentDifficulty === 'challenge' ? 'active' : ''}`}
        onClick={() => onDifficultySelect('challenge')}
      >
        Pro
      </button>
      <button
        className={`difficulty-btn difficulty-brain-fire ${currentDifficulty === 'brain-fire' ? 'active' : ''}`}
        onClick={() => onDifficultySelect('brain-fire')}
      >
        Master
      </button>
    </div>
  );
};